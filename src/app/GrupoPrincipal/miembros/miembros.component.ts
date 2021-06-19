import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {

  miembros = new Array<User>();

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
