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
  posts: Array<Post> = [];

  constructor(
    private service: PublicacionService
    ) { }

  ngOnInit(): void {
    const id: number = +localStorage.getItem('id_asociacion')!;

    this.service.getPosts(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          this.posts.push(iterator);
        }
      },
      (error: any) => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
