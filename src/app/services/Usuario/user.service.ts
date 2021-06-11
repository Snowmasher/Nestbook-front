import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedChanged = new Subject<boolean>();

  url = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  getUser() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get('http://localhost:8000/api/user', { headers });
  }

  login(token: any): void {
    localStorage.setItem('token', token);
    this.loggedChanged.next(true);
  }

  logout(): void {
    localStorage.removeItem('id_user');
    localStorage.removeItem('id_asociacion');
    localStorage.removeItem('token');
    this.loggedChanged.next(false);
  }
  isUserLoggedIn(): Subject<boolean> {
    return this.loggedChanged;
  }

  register(data: any) {
    return this.http.post(this.url + '/api/user/create', data);
  }

  registerMod(data: any) {
    return this.http.post(this.url + '/api/user/createMod', data);
  }

  update(data: any){
    return this.http.put(this.url + '/api/user/update', data);
  }

  updateMod(data: any) {
    return this.http.put(this.url + '/api/user/updateMod', data);
  }

  getAllPossibleMods() {
    return this.http.get(this.url + '/api/getMods');
  }

  getData(id: number){
    return this.http.get(this.url + '/api/user/' + id);
  }

  usersByAsoc(){
    return this.http.get(this.url + '/api/usersByAsoc/' + localStorage.getItem('id_asociacion'));
  }

  differents(id: number){
    return this.http.get(this.url + '/api/user/getDifferents/' + id);
  }
}
