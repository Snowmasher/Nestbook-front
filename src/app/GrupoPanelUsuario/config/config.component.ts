import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  form!: FormGroup;
  user: User = new User();

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4),
      ]),
      password: new FormControl('')
    });

    const id:number = +localStorage.getItem('id_user')!;

    this.userService.getData(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (
            iterator !== undefined &&
            iterator !== null &&
            iterator
          ) {
            const u = new User();

            // Añadimos los valores al objeto
            u.id = iterator.id;
            u.id_asociacion = iterator.id_asociacion;
            u.name = iterator.name;
            u.real_name = iterator.real_name;
            u.rol = iterator.rol;
            u.email = iterator.email;
            u.created_at = iterator.created_at.split(' ')[0];
            u.updated_at = iterator.updated_at.split(' ')[0];

            this.user = u;
          }
        }
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = [
      {
        id: this.user.id,
        name: formData.name,
        password: formData.password,
      },
    ];

    this.userService.update(data).subscribe(
      (result: any) => {
        console.log(result);

        $('.alert-success').fadeIn();

        setTimeout(() => $('.alert-success').fadeOut(), 4000);
      },
      (error) => {
        console.log('error');
        console.log(error);

        $('.alert-danger').fadeIn();

        setTimeout(() => $('.alert-danger').fadeOut(), 4000);
      }
    );
  }
}
