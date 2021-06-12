import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Canario } from 'src/app/Models/Canario';

@Injectable({
  providedIn: 'root'
})
export class CanarioService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getData(id: number){
    return this.http.get(this.url + '/api/canario/' + id);
  }

  getByUser(id: number){
    return this.http.get(this.url + '/api/canario/user/' + id);
  }

  register(data: any) {
    return this.http.post(this.url + '/api/canario/create', data);
  }

  update(data: any){
    return this.http.put(this.url + '/api/canario/update', data);
  }
}
