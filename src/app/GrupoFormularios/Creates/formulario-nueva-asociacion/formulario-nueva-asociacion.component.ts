import { UserService } from 'src/app/services/Usuario/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AsociacionService } from 'src/app/services/Asociacion/asociacion.service';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-nueva-asociacion',
  templateUrl: './formulario-nueva-asociacion.component.html',
  styleUrls: ['./formulario-nueva-asociacion.component.css'],
})
export class FormularioNuevaAsociacionComponent implements OnInit {
  form!: FormGroup;
  moderadores = Array<User>();

  constructor(
    private router: Router,
    private asocService: AsociacionService,
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

    this.userService.getAllPossibleMods().subscribe(
      (result: any) => {
        this.moderadores = result;
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
        nombre: formData.nombre,
        id_mod: formData.id_mod,
        url_img: formData.url_img,
      },
    ];

    this.asocService.register(data).subscribe(
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
