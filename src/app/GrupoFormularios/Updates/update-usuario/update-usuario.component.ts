import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  form!: FormGroup;
  user: User = new User();

  constructor(
    private rutaActiva: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      real_name: new FormControl('', [Validators.required]),
      id_asociacion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    const id = this.rutaActiva.snapshot.params.id;

    this.userService.getData(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const u = new User();

            // Añadimos los valores al objeto
            u.id = iterator.id;
            u.id_asociacion = iterator.id_asociacion;
            u.name = iterator.name;
            u.real_name = iterator.real_name;
            u.rol = iterator.rol;
            u.email = iterator.email;
            u.created_at = (iterator.created_at).split(' ')[0];
            u.updated_at = (iterator.updated_at).split(' ')[0];

            // Comprueba si se ha dado de baja
            if(iterator.deleted_at !== undefined && iterator.deleted_at !== null && iterator.deleted_at !== ''){
              u.deleted_at = (iterator.deleted_at).split(' ')[0];
            }
            else{
              u.deleted_at = '---';
            }

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
    const data = [{
      id: this.user.id,
      name: formData.name,
      real_name: formData.real_name,
      id_asociacion: formData.id_asociacion,
      email: formData.email,
      password: formData.password
    }];

    this.userService.update(data).subscribe(
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
