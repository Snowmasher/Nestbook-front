import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    const id:number = +localStorage.getItem('id_user')!;

    this.userService.getData(id).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (
            iterator !== undefined &&
            iterator !== null &&
            iterator
          ) {
            const u = new User();

            // Añadimos los valores al objeto
            u.rol = iterator.rol;
            this.user = u;
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
