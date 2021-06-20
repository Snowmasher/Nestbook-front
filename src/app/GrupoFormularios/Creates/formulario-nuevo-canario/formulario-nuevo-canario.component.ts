import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CanarioService } from 'src/app/services/Canario/canario.service';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-formulario-nuevo-canario',
  templateUrl: './formulario-nuevo-canario.component.html',
  styleUrls: ['./formulario-nuevo-canario.component.css']
})
export class FormularioNuevoCanarioComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private canarioService: CanarioService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      num_anilla: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(12),
      ]),
      num_anilla_padre: new FormControl('', [
        Validators.maxLength(12),
        Validators.minLength(12),
      ]),
      num_anilla_madre: new FormControl('', [
        Validators.maxLength(12),
        Validators.minLength(12),
      ]),
      sexo: new FormControl(''),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      url_img: new FormControl('')
    });

    const myId: number = +localStorage.getItem('id_user')!;
    //Subscribe para restringir la entrada
    this.userService.getData(myId).subscribe(
      (result: any) => {
        for (const i of JSON.parse(JSON.stringify(result))) {
          if (
            i.rol === 'A'
          ) {
            this.router.navigate(['/panel']);
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
    const data = [{
      num_anilla: formData.num_anilla,
      num_anilla_padre: formData.num_anilla_padre,
      num_anilla_madre: formData.num_anilla_madre,
      id_usuario: localStorage.getItem('id_user'),
      sexo: formData.sexo,
      fecha_nacimiento: formData.fecha_nacimiento,
      url_img: formData.url_img,

    }];

    this.canarioService.register(data).subscribe(
      (result: any) => {
        console.log(result);

        $('.alert-success').fadeIn();

        setTimeout(
          () => $('.alert-success').fadeOut(),
          4000
        );
      },
      (error) => {
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
