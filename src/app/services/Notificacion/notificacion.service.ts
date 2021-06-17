import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url + '/api/notificacion/getAll');
  }

  delete(data: any) {
    return this.http.delete(this.url + '/api/notificacion/delete/' + data);
  }

  sendRegisterUser(data: any) {
    return this.http.post(this.url + '/api/notificacion/create', data);
  }
}
