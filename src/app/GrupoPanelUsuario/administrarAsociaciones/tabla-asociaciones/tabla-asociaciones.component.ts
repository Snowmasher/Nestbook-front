import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Asociacion } from '../../../Models/Asociacion';

@Component({
  selector: 'app-tabla-asociaciones',
  templateUrl: './tabla-asociaciones.component.html',
  styleUrls: ['./tabla-asociaciones.component.css']
})
export class TablaAsociacionesComponent implements OnInit {
  url = 'http://localhost:8000/api/asociacion/getAll';

  asociaciones: Array<Asociacion> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const a = new Asociacion();

          a.id = iterator.id;
          a.id_mod = iterator.id_mod;
          a.nombre = iterator.nombre;
          a.created_at = iterator.created_at;
          this.asociaciones.push(a);
        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
