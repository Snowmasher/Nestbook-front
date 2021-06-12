import { InfoBarComponent } from '../../GrupoGeneral/info-bar/info-bar.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../../Models/user';
import { environment } from 'src/environments/environment';

export interface Usuario {
  id_asociacion: number;
}

@Injectable({
  providedIn: 'root'
})
export class AsociacionService {

  info: any;
  idAsoc!: number;
  asociacion: any;
  url = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

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
}
