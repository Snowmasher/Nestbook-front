import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedChanged = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

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
    return this.http.post(localStorage.getItem('url_api') + '/api/user/create', data);
  }

  registerMod(data: any) {
    return this.http.post(localStorage.getItem('url_api') + '/api/user/createMod', data);
  }

  updateMod(data: any) {
    return this.http.put(localStorage.getItem('url_api') + '/api/user/updateMod', data);
  }

  getAllPossibleMods() {
    return this.http.get(localStorage.getItem('url_api') + '/api/getMods');
  }

  getData(id: number){
    return this.http.get(localStorage.getItem('url_api') + '/api/user/' + id);
  }
}
