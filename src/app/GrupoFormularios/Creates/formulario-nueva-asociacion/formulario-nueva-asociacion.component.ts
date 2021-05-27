import { Usuario } from './../../../services/Asociacion/asociacion.service';
import { UserService } from 'src/app/services/Usuario/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsociacionService } from 'src/app/services/Asociacion/asociacion.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-formulario-nueva-asociacion',
  templateUrl: './formulario-nueva-asociacion.component.html',
  styleUrls: ['./formulario-nueva-asociacion.component.css']
})
export class FormularioNuevaAsociacionComponent implements OnInit {

  form!: FormGroup;
  moderadores = Array<User>();

  constructor(
    private asocService: AsociacionService,
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: '',
      id_mod: ''
    });

    this.userService.getAllPossibleMods().subscribe(
      (result: any) => {
        this.moderadores = result;
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
      nombre: formData.nombre,
      id_mod: formData.id_mod
    }];

    this.asocService.register(data).subscribe(
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
