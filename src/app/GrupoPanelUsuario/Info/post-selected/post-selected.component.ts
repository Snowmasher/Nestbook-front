import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/Post';
import { PublicacionService } from 'src/app/services/Publicacion/publicacion.service';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css']
})
export class PostSelectedComponent implements OnInit {

  post: Post = new Post();

  constructor(
    private rutaActiva: ActivatedRoute,
    private service: PublicacionService
  ) { }

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params.id;
    this.service.getOne(id).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const p = new Post();

            // Añadimos los valores al objeto
            p.id = iterator.id;
            p.id_asociacion = iterator.id_asociacion;
            p.titulo = (iterator.titulo);
            p.contenido = iterator.contenido;
            p.created_at = (iterator.created_at).split(' ')[0];
            p.updated_at = (iterator.updated_at).split(' ')[0];

            // Comprueba si se ha dado de baja
            if (iterator.deleted_at !== undefined && iterator.deleted_at !== null && iterator.deleted_at !== ''){
              p.deleted_at = (iterator.deleted_at).split(' ')[0];
            }
            else{
              p.deleted_at = '---';
            }

            this.post = p;
          }

        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }


}
