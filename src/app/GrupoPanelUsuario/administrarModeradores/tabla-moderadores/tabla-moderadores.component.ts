import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-tabla-moderadores',
  templateUrl: './tabla-moderadores.component.html',
  styleUrls: ['./tabla-moderadores.component.css']
})
export class TablaModeradoresComponent implements OnInit {

  moderadores: Array<User> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(localStorage.getItem('url_api') + '/api/getMods').subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const m = new User();

          m.id = iterator.id;
          m.name = iterator.name;
          m.real_name = iterator.real_name;
          m.id_asociacion = iterator.id_asociacion;
          m.email = iterator.email;
          this.moderadores.push(m);
        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
