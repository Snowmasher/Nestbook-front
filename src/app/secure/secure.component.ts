import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  user: any;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    console.log(localStorage.getItem('token'));
    this.http.get('http://localhost:8000/api/user', {headers}).subscribe(
      (result: any) => {
        localStorage.setItem('id_user', result.id);
        localStorage.setItem('id_asociacion', result.id_asociacion);
        this.router.navigate(['/principal']),
        this.userService.login(localStorage.getItem('token'));
      } ,
      error => {
        this.userService.logout();
        this.router.navigate(['/login']);
      }
    );
  }
}
