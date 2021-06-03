import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/Usuario/user.service';

@Component({
  selector: 'app-lista-miembros',
  templateUrl: './lista-miembros.component.html',
  styleUrls: ['./lista-miembros.component.css']
})
export class ListaMiembrosComponent implements OnInit {

  miembros = [];

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