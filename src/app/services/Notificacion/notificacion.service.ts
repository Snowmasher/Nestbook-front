import { Notificacion } from 'src/app/Models/Notificacion';
import { User } from 'src/app/Models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getData(id: number) {
    return this.http.get(this.url + '/api/notificacion/' + id);
  }

  getAllByUser(id: number) {
    return this.http.get(this.url + '/api/notificacionByUser/' + id);
  }

  delete(data: any) {
    return this.http.delete(this.url + '/api/notificacion/delete/' + data);
  }

  enviarRegistroUser(data: any) {
    return this.http.post(this.url + '/api/notificacion/create/user', data);
  }

  enviarIntercambio(data: any) {
    return this.http.post(this.url + '/api/notificacion/create/intercambio', data);
  }

  crearUser(user: any) {
    return this.http.post(this.url + '/api/user/create', user);
  }

  rechazarUser(notificacion: number) {
    return this.delete(notificacion);
  }

  aceptaIntercambio(data: any){
    return this.http.put(this.url + '/api/canario/intercambio', data);
  }

  rechazarIntercambio(notificacion: number){
    return this.delete(notificacion);
  }
}
