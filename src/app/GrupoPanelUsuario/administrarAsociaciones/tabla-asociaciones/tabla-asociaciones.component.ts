import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Asociacion } from './Asociacion';

@Component({
  selector: 'app-tabla-asociaciones',
  templateUrl: './tabla-asociaciones.component.html',
  styleUrls: ['./tabla-asociaciones.component.css']
})
export class TablaAsociacionesComponent implements OnInit {
  url = localStorage.getItem('url_api') + '/api/asociacion/getAll';

  asociaciones: Array<Asociacion> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const a = new Asociacion();

          a.id = iterator.id;
          a.idMod = iterator.id_mod;
          a.nombre = iterator.nombre;
          a.creado = iterator.created_at;
          this.asociaciones.push(a);
        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
