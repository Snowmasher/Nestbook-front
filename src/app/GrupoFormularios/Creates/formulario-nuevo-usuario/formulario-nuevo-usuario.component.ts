import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-formulario-nuevo-usuario',
  templateUrl: './formulario-nuevo-usuario.component.html',
  styleUrls: ['./formulario-nuevo-usuario.component.css']
})
export class FormularioNuevoUsuarioComponent implements OnInit {

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
      email: formData.email,
      password: formData.password
    }];

    this.userService.register(data).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }

}