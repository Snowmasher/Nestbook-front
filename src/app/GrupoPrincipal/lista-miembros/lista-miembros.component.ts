import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../../services/Usuario/user.service';

@Component({
  selector: 'app-lista-miembros',
  templateUrl: './lista-miembros.component.html',
  styleUrls: ['./lista-miembros.component.css']
})
export class ListaMiembrosComponent implements OnInit {

  miembros = [];

  url = environment.baseUrl;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.usersByAsoc().subscribe(
      (result: any) => {
        this.miembros = result;
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      }
    );
  }

}
