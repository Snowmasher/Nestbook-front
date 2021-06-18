import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/Publicacion/publicacion.service';
import { Post } from '../../Models/Post';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  datos = [];
  posts: Array<Post> = new Array<Post>();

  constructor(
    private service: PublicacionService
    ) { }

  ngOnInit(): void {

    this.service.getPosts().subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {

          const p = new Post();

          p.titulo = iterator.titulo;
          p.contenido = iterator.contenido;
          p.created_at = iterator.created_at;
          p.url_img = iterator.url_img;

          this.posts.push(p);
        }
      },
      (error: any) => {
        console.log('ERROR: ' + error);
      }
    );
  }

  abrirImagen(url: string){
    window.open(url, '_blank');
    return false;
  }
}
