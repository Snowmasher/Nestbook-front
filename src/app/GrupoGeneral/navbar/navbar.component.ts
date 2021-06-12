import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { User } from 'src/app/Models/user';
import { UserService } from '../../services/Usuario/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = new User();
  title = 'nestbook';
  loggedIn: Boolean | undefined;
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.loggedIn = this.userService.isUserLoggedIn();
    console.log('isLogged', this.loggedIn);

    const id: number = +localStorage.getItem('id_user')!;
    this.userService.getData(id).subscribe(
      (      result: any) => {
        this.user = result[0];
      },
      (      error: any) => {
        console.log(error);
      }
    );
  }

  logout(): void {
    this.userService.logout();
  }

}
