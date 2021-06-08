import { Canario } from './../../../Models/Canario';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CanarioService } from 'src/app/services/Canario/canario.service';
import { UserService } from 'src/app/services/Usuario/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-update-canario',
  templateUrl: './update-canario.component.html',
  styleUrls: ['./update-canario.component.css'],
})
export class UpdateCanarioComponent implements OnInit {
  form!: FormGroup;
  canario: Canario = new Canario();
  nombreUsuario!: String;
  usuarios_disponibles = new Array<User>();

  constructor(
    private rutaActiva: ActivatedRoute,
    private canarioService: CanarioService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      id_usuario: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
    });

    const id = this.rutaActiva.snapshot.params.id;

    this.canarioService.getData(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const c = new Canario();

            // Añadimos los valores al objeto
            c.id = iterator.id;
            c.id_usuario = iterator.id_usuario;
            c.sexo = iterator.sexo;

            this.canario = c;


            this.userService.differents(this.canario.id_usuario).subscribe(
              (result: any) => {
                for (const iterator of JSON.parse(JSON.stringify(result))) {
                  if (iterator !== undefined && iterator !== null && iterator) {
                    const u = new User();

                    // Añadimos los valores al objeto
                    u.id = iterator.id;
                    u.name = iterator.name;
                    u.rol = iterator.rol;

                    if (this.canario.id_usuario != u.id && u.rol != 'A') {
                      this.usuarios_disponibles.push(u);
                    } else {
                    }
                  }

                  //Subscribe anidado para coger el nombre del id_mod actual

                }
              },
              (error: any) => {
                console.log('error');
                console.log(error);
              }
            );
          }
        }
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = [
      {
        id: this.canario.id,
        sexo: formData.sexo,
        id_usuario: formData.id_usuario,
      },
    ];

    this.canarioService.update(data).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
