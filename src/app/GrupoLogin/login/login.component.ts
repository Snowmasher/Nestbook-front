import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../../services/Usuario/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  url = environment.baseUrl;
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
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'NwsbZNPAl70o6NWO9d2ZNTD9kyxInXkiaVyRSTVs',
      scope: '*'
    };

    this.http.post(this.url + '/oauth/token', data).subscribe(
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