import { Url } from './../../url';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/Usuario/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });

    localStorage.setItem('url_api', 'http://100.25.154.116:8000');
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'lUnUxCkQHJaJjm4ngxNhwYvWF8V6PDY9CdzX1TMQ',
      scope: '*'
    };

    this.http.post(localStorage.getItem('url_api') + '/oauth/token', data).subscribe(
      (result: any) => {

        this.userService.login(result.access_token);
        this.router.navigate(['/secure']);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
