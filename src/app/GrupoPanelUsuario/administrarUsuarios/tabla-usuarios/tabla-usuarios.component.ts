import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  miembros: Array<User> = [];

  constructor(private http: HttpClient, private service: UserService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/usersByAsoc/' + localStorage.getItem('id_asociacion')).subscribe(
      (result: any) => {
        this.miembros = result;
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }

}
