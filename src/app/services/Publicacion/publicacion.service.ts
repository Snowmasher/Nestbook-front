import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }


  register(data: any) {
    return this.http.post('http://localhost:8000/api/posts/create', data);
  }
}
