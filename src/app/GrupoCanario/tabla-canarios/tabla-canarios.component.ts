import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Canario } from './Canario';

@Component({
  selector: 'app-tabla-canarios',
  templateUrl: './tabla-canarios.component.html',
  styleUrls: ['./tabla-canarios.component.css']
})
export class TablaCanariosComponent implements OnInit, OnChanges {

  user: any;
  canarios: Array<Canario> = [];
  constructor(private http: HttpClient) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }



  ngOnInit() {

    this.http.get('http://localhost:8000/api/canario/user/' + localStorage.getItem('id_user')).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const c = new Canario();

          c.anilla = iterator.num_anilla;
          c.nacimiento = iterator.fecha_nacimiento;
          c.anillaPadre = iterator.num_anilla_padre;
          c.anillaMadre = iterator.num_anilla_madre;
          c.sexo = iterator.sexo;
          this.canarios.push(c);
        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
