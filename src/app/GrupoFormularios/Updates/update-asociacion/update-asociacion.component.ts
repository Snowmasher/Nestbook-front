import { Asociacion } from './../../../Models/Asociacion';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AsociacionService } from 'src/app/services/Asociacion/asociacion.service';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-update-asociacion',
  templateUrl: './update-asociacion.component.html',
  styleUrls: ['./update-asociacion.component.css'],
})
export class UpdateAsociacionComponent implements OnInit {
  form!: FormGroup;
  nombreMod!: String;
  asociacion: Asociacion = new Asociacion();
  mods_disponibles = new Array<User>();

  constructor(
    private rutaActiva: ActivatedRoute,
    private asociacionService: AsociacionService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      id_mod: new FormControl('', [Validators.required]),
    });

    const id = this.rutaActiva.snapshot.params.id;

    this.asociacionService.getOne(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const a = new Asociacion();

            // Añadimos los valores al objeto
            a.id = iterator.id;
            a.nombre = iterator.nombre;
            a.id_mod = iterator.id_mod;

            this.asociacion = a;
          }
        }
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      }
    );

    this.asociacionService.getAllMods().subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const u = new User();

            // Añadimos los valores al objeto
            u.id = iterator.id;
            u.name = iterator.name;

            if (this.asociacion.id_mod != u.id) {
              this.mods_disponibles.push(u);
            } else {
            }
          }

          //Subscribe anidado para coger el nombre del id_mod actual
          this.userService.getData(this.asociacion.id_mod).subscribe(
            (result: any) => {
              for (const iterator of JSON.parse(JSON.stringify(result))) {
                if (iterator !== undefined && iterator !== null && iterator) {
                  const u = new User();

                  // Añadimos los valores al objeto
                  u.id = iterator.id;
                  u.name = iterator.name;

                  if (this.asociacion.id_mod === u.id) {
                    this.nombreMod = u.name;
                  }
                }
              }
            },
            (error: any) => {
              console.log('error');
              console.log(error);
            }
          );
        }
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = [
      {
        id: this.asociacion.id,
        nombre: formData.nombre,
        id_mod: formData.id_mod,
      },
    ];

    this.asociacionService.updateAsociacion(data).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
