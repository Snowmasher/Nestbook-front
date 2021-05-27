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
    return this.http.post('http://localhost:8000/api/user/create', data);
  }
}
