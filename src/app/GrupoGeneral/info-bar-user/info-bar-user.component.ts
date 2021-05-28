import { UserService } from '../../services/Usuario/user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bar-user',
  templateUrl: './info-bar-user.component.html',
  styleUrls: ['./info-bar-user.component.css']
})
export class InfoBarUserComponent implements OnInit {

  user: any;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get(localStorage.getItem('url_api') + '/api/user', { headers }).toPromise().then(
      result => {
        console.log(result);
        this.user = result;
      },
      error => {
        console.log(error);
      }
    ).finally(
      () => {
      }
    );

  }

}
