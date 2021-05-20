import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  user: any;
  constructor(
    private http: HttpClient,
    private service: UserService
  ) { }

  ngOnInit(): void {

    let res: any;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get('http://localhost:8000/api/user', { headers }).toPromise().then(
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
