import { NotificacionService } from 'src/app/services/Notificacion/notificacion.service';
import { Asociacion } from './../../../Models/Asociacion';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AsociacionService } from 'src/app/services/Asociacion/asociacion.service';
import { UserService } from 'src/app/services/Usuario/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-formulario-nuevo-usuario',
  templateUrl: './formulario-nuevo-usuario.component.html',
  styleUrls: ['./formulario-nuevo-usuario.component.css'],
})
export class FormularioNuevoUsuarioComponent implements OnInit {
  form!: FormGroup;
  user = new User();
  asociaciones = new Array<Asociacion>();

  constructor(
    private userService: UserService,
    private asociacionService: AsociacionService,
    private notificacionService: NotificacionService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      real_name: new FormControl('', [Validators.required]),
      id_asociacion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
    });

    this.asociacionService.getAll().subscribe(
      (result: any) => {
        for (const iterator of result) {
          const a = new Asociacion();

          a.id = iterator.id;
          a.nombre = iterator.nombre;
          a.id_mod = iterator.id_mod;

          if (a.id !== 1) {
            this.asociaciones.push(a);
          }
        }
      },
      (error: any) => {}
    );
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();

    const data = [
      {
        id_asociacion: formData.id_asociacion,
        contenido: {
          name: formData.name,
          real_name: formData.real_name,
          id_asociacion: formData.id_asociacion,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        },
      },
    ];

    // const data = [{
    //   name: formData.name,
    //   real_name: formData.real_name,
    //   id_asociacion: formData.id_asociacion,
    //   email: formData.email,
    //   password: formData.password,
    //   password_confirmation: formData.password_confirmation,
    // }];

    this.notificacionService.enviarRegistroUser(data).subscribe(
      (result: any) => {
        console.log(result);
        $('.alert-success').fadeIn();

        setTimeout(() => $('.alert-success').fadeOut(), 4000);
      },
      (error) => {
        console.log('error');
        console.log(error);

        $('.alert-danger').fadeIn();

        setTimeout(() => $('.alert-danger').fadeOut(), 4000);
      }
    );
  }
}
