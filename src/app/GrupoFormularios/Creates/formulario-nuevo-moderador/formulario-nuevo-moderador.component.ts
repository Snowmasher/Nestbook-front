import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-formulario-nuevo-moderador',
  templateUrl: './formulario-nuevo-moderador.component.html',
  styleUrls: ['./formulario-nuevo-moderador.component.css']
})
export class FormularioNuevoModeradorComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      real_name: '',
      id_asociacion: '',
      email: '',
      password: ''
    });
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = [{
      name: formData.name,
      real_name: formData.real_name,
      id_asociacion: localStorage.getItem('id_asociacion'),
      avatar: 2,
      email: formData.email,
      password: formData.password
    }];

    this.userService.registerMod(data).subscribe(
      (result: any) => {
        console.log(result);
        $('.alert-success').fadeIn();

        setTimeout(
          () => $('.alert-success').fadeOut(),
          4000
        );
      },
      (error) => {
        console.log('error');
        console.log(error);

        $('.alert-danger').fadeIn();

        setTimeout(
          () => $('.alert-danger').fadeOut(),
          4000
        );
      }
    );
  }

}
