import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsociacionService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(this.url + '/api/asociacion/create', data);
  }

  getData(id: number){
    return this.http.get(this.url + '/api/asociacion/' + id);
  }

  updateAsociacion(data: any) {
    return this.http.put(this.url + '/api/asociacion/update', data);
  }

  getOne(id: number) {
    return this.http.get(this.url + '/api/asociacion/' + id);
  }

  getAllMods() {
    return this.http.get(this.url + '/api/getMods');
  }

  getAll() {
  return this.http.get(this.url + '/api/asociacion/getAll')
  }

  delete(data: any){
    return this.http.delete(this.url + '/api/asociacion/delete/' + data);
  }
}
