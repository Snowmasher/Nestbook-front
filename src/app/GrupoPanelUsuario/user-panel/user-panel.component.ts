import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from '../../services/Usuario/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  user: User = new User();
  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {

    this.service.getUser().subscribe(
      (result: any) => {
        this.user.id = result.id;
        this.user.rol = result.rol;
        this.user.id_asociacion = result.id_asociacion;
      },
      error => {
        console.log(error);
      }
    );

  }

}
