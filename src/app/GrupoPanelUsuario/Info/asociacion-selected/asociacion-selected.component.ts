import { Asociacion } from './../../../Models/Asociacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsociacionService } from 'src/app/services/Asociacion/asociacion.service';

@Component({
  selector: 'app-asociacion-selected',
  templateUrl: './asociacion-selected.component.html',
  styleUrls: ['./asociacion-selected.component.css']
})
export class AsociacionSelectedComponent implements OnInit {

  asoc: Asociacion = new Asociacion();

  constructor(
    private rutaActiva: ActivatedRoute,
    private service: AsociacionService
  ) { }

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params.id;
    this.service.getData(id).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const a = new Asociacion();

            // Añadimos los valores al objeto
            a.id = iterator.id;
            a.id_mod = iterator.id_mod;
            a.nombre = (iterator.nombre);
            a.created_at = (iterator.created_at).split(' ')[0];
            a.updated_at = (iterator.updated_at).split(' ')[0];

            // Comprueba si se ha dado de baja
            if (iterator.deleted_at !== undefined && iterator.deleted_at !== null && iterator.deleted_at !== ''){
              a.deleted_at = (iterator.deleted_at).split(' ')[0];
            }
            else{
              a.deleted_at = '---';
            }

            this.asoc = a;
          }

        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
