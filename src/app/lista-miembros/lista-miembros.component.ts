import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lista-miembros',
  templateUrl: './lista-miembros.component.html',
  styleUrls: ['./lista-miembros.component.css']
})
export class ListaMiembrosComponent implements OnInit {

  miembros = [];

  constructor(private http: HttpClient, private service: UserService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/usersByAsoc/1').subscribe(
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
