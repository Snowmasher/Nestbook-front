import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../Publicacion';

@Component({
  selector: 'app-tabla-publicaciones',
  templateUrl: './tabla-publicaciones.component.html',
  styleUrls: ['./tabla-publicaciones.component.css']
})
export class TablaPublicacionesComponent implements OnInit {

  publicaciones: Array<Publicacion> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/posts/' + localStorage.getItem('id_asociacion')).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const p = new Publicacion();

          p.id = iterator.id;
          p.idAsociacion = iterator.id_asociacion;
          p.titulo = iterator.titulo;
          p.contenido = iterator.contenido;
          p.publicado = (new Date(iterator.created_at)).toUTCString();
          p.editado = (new Date(iterator.updated_at)).toUTCString();
          this.publicaciones.push(p);
        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
