import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/Post';
import { PublicacionService } from 'src/app/services/Publicacion/publicacion.service';

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
    private postService: PublicacionService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      titulo: new FormControl('', [Validators.required]),
      contenido: new FormControl('', [Validators.required])
    });

    const id = this.rutaActiva.snapshot.params.id;

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

            this.post = p;
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
      contenido: formData.contenido,
      id_asociacion: this.post.id_asociacion
    }];

    this.postService.updatePost(data).subscribe(
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
