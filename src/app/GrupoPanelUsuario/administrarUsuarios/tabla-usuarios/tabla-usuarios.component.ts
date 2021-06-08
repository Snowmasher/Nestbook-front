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
    this.service.usersByAsoc().subscribe(
      (result: any) => {

        for (const user of result) {
          if (user.rol !== 'M' && user.rol !== 'A'){
            this.miembros.push(user);
          }
        }
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }

}
