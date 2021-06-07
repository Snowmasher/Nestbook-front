import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }


  register(data: any) {
    return this.http.post(this.url + '/api/posts/create', data);
  }

  getPosts(idAsociacion: number){
    return this.http.get(this.url + '/api/posts/' + localStorage.getItem('id_asociacion'));
  }

  getData(id: number){
    return this.http.get(this.url + '/api/posts/' + id);
  }

  getOne(id: number){
    return this.http.get(this.url + '/api/posts/show/' + id);
  }

  updatePost(data: any){
    return this.http.put(this.url + '/api/posts/update', data);
  }
}
