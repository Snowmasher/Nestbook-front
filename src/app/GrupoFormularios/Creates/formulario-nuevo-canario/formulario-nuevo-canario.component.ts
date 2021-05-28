import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CanarioService } from 'src/app/services/Canario/canario.service';

@Component({
  selector: 'app-formulario-nuevo-canario',
  templateUrl: './formulario-nuevo-canario.component.html',
  styleUrls: ['./formulario-nuevo-canario.component.css']
})
export class FormularioNuevoCanarioComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private canarioService: CanarioService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      num_anilla: '',
      num_anilla_padre: '',
      num_anilla_madre: '',
      id_usuario: '',
      sexo: '',
      fecha_nacimiento: ''
    });
  }

  onSubmit(): void {
    const formData = this.form.getRawValue();
    const data = [{
      num_anilla: formData.num_anilla,
      num_anilla_padre: formData.num_anilla_padre,
      num_anilla_madre: formData.num_anilla_madre,
      id_usuario: localStorage.getItem('id_user'),
      sexo: formData.sexo,
      fecha_nacimiento: formData.fecha_nacimiento

    }];

    this.canarioService.register(data).subscribe(
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
