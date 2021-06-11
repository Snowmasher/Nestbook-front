import { UserService } from 'src/app/services/Usuario/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-info-bar-user',
  templateUrl: './info-bar-user.component.html',
  styleUrls: ['./info-bar-user.component.css']
})
export class InfoBarUserComponent implements OnInit {

  user = new User();
  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {

    this.service.getUser().subscribe(
      (result: any) => {
        // console.log(result);
        this.user.id = result.id;
        this.user.name = result.name;
        this.user.real_name = result.real_name;
        this.user.rol = result.rol;
      },
      error => {
        console.log(error);
      }
    );

  }

}
