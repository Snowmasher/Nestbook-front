import { InfoBarComponent } from '../../GrupoGeneral/info-bar/info-bar.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../../user';

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
  url = localStorage.getItem('url_api') + '/api/asociacion/';

  constructor(
    private http: HttpClient,
  ) { }

  async getAsocInfoBar(): Promise<any> {

    let res: any;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get(localStorage.getItem('url_api') + '/api/user', { headers }).toPromise().then(
      result => {
        console.log(result);
        res = result;
        this.asociacion = res.id_asociacion;
      },
      error => {
        console.log(error);
      }
    ).finally(
      () => {
        this.url = this.url + this.asociacion;
        this.http.get(this.url).toPromise().then(
          (      result: any) => {
            console.log(result);
            this.info = result;
          },
          (      error: any) => {
            console.log(error);
          }
        ).finally(
          () => this.info
        );
      }
    );
  }

  register(data: any) {
    return this.http.post(localStorage.getItem('url_api') + '/api/asociacion/create', data);
  }
}
