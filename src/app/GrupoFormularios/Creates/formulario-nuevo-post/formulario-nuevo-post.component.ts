import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PublicacionService } from 'src/app/services/Publicacion/publicacion.service';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-formulario-nuevo-post',
  templateUrl: './formulario-nuevo-post.component.html',
  styleUrls: ['./formulario-nuevo-post.component.css']
})
export class FormularioNuevoPostComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private postService: PublicacionService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: '',
      url_img: '',
      contenido: ''
    });

    this.form = this.fb.group({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(6),
      ]),
      contenido: new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(5000),
      ]),
      url_img: new FormControl('')
    });

    const myId: number = +localStorage.getItem('id_user')!;
    //Subscribe para restringir la entrada
    this.userService.getData(myId).subscribe(
      (result: any) => {
        for (const i of JSON.parse(JSON.stringify(result))) {
          if (
            i.rol !== 'M' && i.rol !== 'A'
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
      id_asociacion: localStorage.getItem('id_asociacion'),
      titulo: formData.titulo,
      url_img: formData.url_img,
      contenido: formData.contenido
    }];

    this.postService.register(data).subscribe(
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
