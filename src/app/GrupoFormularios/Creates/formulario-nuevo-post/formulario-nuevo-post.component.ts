import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id_asociacion: '',
      titulo: '',
      url_img: '',
      contenido: ''
    });
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
