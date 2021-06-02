import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Canario } from 'src/app/Models/Canario';

@Injectable({
  providedIn: 'root'
})
export class CanarioService {

  constructor(private http: HttpClient) { }

  getData(id: number){
    return this.http.get('http://localhost:8000/api/canario/' + id);
  }

  register(data: any) {
    return this.http.post('http://localhost:8000/api/canario/create', data);
  }
}
