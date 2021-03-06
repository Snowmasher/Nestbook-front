import { Asociacion } from './../../../Models/Asociacion';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private asociacionService: AsociacionService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6),
      ]),
      id_mod: new FormControl('', [
        Validators.required
      ]),
      url_img: new FormControl('')
    });

    const id = this.rutaActiva.snapshot.params.id;
    const myId: number = +localStorage.getItem('id_user')!;

    //Subscribe para restringir la entrada
    this.userService.getData(myId).subscribe((result: any) => {
      for (const iterator of JSON.parse(JSON.stringify(result))) {
        if (iterator.rol !== 'A') {
          this.router.navigate(["/panel"]);
        }
    }
  },
    (error) => {
      console.log('error');
      console.log(error);
    }
  );

    this.asociacionService.getOne(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const a = new Asociacion();

            // A??adimos los valores al objeto
            a.id = iterator.id;
            a.nombre = iterator.nombre;
            a.id_mod = iterator.id_mod;
            a.url_img = iterator.url_img;

            this.asociacion = a;
          }
        }
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      }
    );

    // Subscribe para coger los moderadores
    this.asociacionService.getAllMods().subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const u = new User();

            // A??adimos los valores al objeto
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

                  // A??adimos los valores al objeto
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
        url_img: formData.url_img
      },
    ];

    // Subscribe de edici??n de asociaci??n
    this.asociacionService.updateAsociacion(data).subscribe(
      (result: any) => {
        console.log(result);

        $('.alert-success').fadeIn();

        setTimeout(
          () => $('.alert-success').fadeOut(),
          4000
        );
      },
      (error: any) => {
        console.log('error');
        console.log(error);

        $('.alert-danger').fadeIn();

        setTimeout(
          () => $('.alert-danger').fadeOut(),
          4000
        );
      }
    );
  }
}
