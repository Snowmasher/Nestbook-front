import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }


  register(data: any) {
    return this.http.post(localStorage.getItem('url_api') + '/api/posts/create', data);
  }
}
