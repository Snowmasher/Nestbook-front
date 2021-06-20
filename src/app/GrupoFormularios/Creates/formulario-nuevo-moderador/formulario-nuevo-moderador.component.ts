import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-formulario-nuevo-moderador',
  templateUrl: './formulario-nuevo-moderador.component.html',
  styleUrls: ['./formulario-nuevo-moderador.component.css'],
})
export class FormularioNuevoModeradorComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6),
      ]),
      real_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
    });

    const myId: number = +localStorage.getItem('id_user')!;
    //Subscribe para restringir la entrada
    this.userService.getData(myId).subscribe(
      (result: any) => {
        for (const i of JSON.parse(JSON.stringify(result))) {
          if (i.rol !== 'A') {
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
    const data = [
      {
        name: formData.name,
        real_name: formData.real_name,
        id_asociacion: localStorage.getItem('id_asociacion'),
        avatar: 2,
        email: formData.email,
        password: formData.password,
      },
    ];

    this.userService.registerMod(data).subscribe(
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
