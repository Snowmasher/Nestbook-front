import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Models/Post';
import { PublicacionService } from 'src/app/services/Publicacion/publicacion.service';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  form!: FormGroup;
  post: Post = new Post();

  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private postService: PublicacionService,
    private userService: UserService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {

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

    const id = this.rutaActiva.snapshot.params.id;
    const myId: number = +localStorage.getItem('id_user')!;

    // Subscribe para regocer la publicacion
    this.postService.getOne(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const p = new Post();

            // Añadimos los valores al objeto
            p.id = iterator.id;
            p.id_asociacion = iterator.id_asociacion;
            p.titulo = iterator.titulo;
            p.contenido = iterator.contenido;
            p.url_img = iterator.url_img;

            this.post = p;

            //Subscribe para restringir la entrada
            this.userService.getData(myId).subscribe(
              (result: any) => {
                for (const i of JSON.parse(JSON.stringify(result))) {
                  if (
                    i.rol !== 'M' ||
                    i.id_asociacion !== p.id_asociacion
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
      id: this.post.id,
      titulo: formData.titulo,
      url_img: formData.url_img,
      contenido: formData.contenido,
      id_asociacion: this.post.id_asociacion
    }];

    this.postService.updatePost(data).subscribe(
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
