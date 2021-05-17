import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  datos = [];
  posts: Array<Post> = [];
  url = 'http://localhost:8000/api/posts/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          this.posts.push(iterator);
        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
