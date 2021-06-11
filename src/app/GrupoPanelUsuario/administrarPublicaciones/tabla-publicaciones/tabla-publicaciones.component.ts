import { PublicacionService } from 'src/app/services/Publicacion/publicacion.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Publicacion } from '../Publicacion';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-publicaciones',
  templateUrl: './tabla-publicaciones.component.html',
  styleUrls: ['./tabla-publicaciones.component.css'],
})
export class TablaPublicacionesComponent implements OnDestroy, OnInit {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  publicaciones: Array<Publicacion> = [];

  constructor(private service: PublicacionService) {}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json',
      },
      responsive: true
    };

    this.service.getPosts().subscribe(
      (result) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const p = new Publicacion();

          p.id = iterator.id;
          p.idAsociacion = iterator.id_asociacion;
          p.titulo = iterator.titulo;
          p.contenido = iterator.contenido;
          p.publicado = new Date(iterator.created_at).toUTCString();
          p.editado = new Date(iterator.updated_at).toUTCString();
          this.publicaciones.push(p);
        }

        this.dtTrigger.next();
      },
      (error) => {
        console.log('ERROR: ' + error);
      }
    );
  }
}
