import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 1,
      client_secret: 'QNwTpd1HKsclIFT5hQi3feBKL9EI2lRpWshXNU30',
      scope: '*'
    };

    this.http.post('http://localhost:8000/oauth/token', data).subscribe(
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
