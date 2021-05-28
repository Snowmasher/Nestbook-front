import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Canario } from 'src/app/GrupoCanario/Canario';

@Injectable({
  providedIn: 'root'
})
export class CanarioService {

  constructor(private http: HttpClient) { }

  getData(id: number){
    return this.http.get(localStorage.getItem('url_api') + '/api/canario/' + id);
  }

  register(data: any) {
    return this.http.post(localStorage.getItem('url_api') + '/api/canario/create', data);
  }
}
