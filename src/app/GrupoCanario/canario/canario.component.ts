import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CanarioService } from '../../services/Canario/canario.service';
import { Canario } from '../Canario';

@Component({
  selector: 'app-canario',
  templateUrl: './canario.component.html',
  styleUrls: ['./canario.component.css']
})
export class CanarioComponent implements OnInit {

  canario: Canario = new Canario();

  constructor(
    private rutaActiva: ActivatedRoute,
    private service: CanarioService
  ) { }

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params.id;
    this.service.getData(id).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const c = new Canario();

            c.id = iterator.id;
            c.anilla = iterator.num_anilla;
            c.nacimiento = (iterator.fecha_nacimiento).split(' ')[0];
            c.anillaPadre = iterator.num_anilla_padre;
            c.anillaMadre = iterator.num_anilla_madre;
            c.sexo = iterator.sexo;
            c.modificacion = (iterator.updated_at).split(' ')[0];
            c.creacion = (iterator.created_at).split(' ')[0];
            if(iterator.deleted_at !== undefined && iterator.deleted_at !== null && iterator.deleted_at !== '' && iterator.deleted_at){
              c.baja = (iterator.deleted_at).split(' ')[0];
            }
            else{
              c.baja = '---';
            }

            this.canario = c;
          }

        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );;
  }

}
