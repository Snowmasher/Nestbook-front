import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/Usuario/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'nestbook';
  loggedIn: any;
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.isUserLoggedIn().subscribe(
      status => this.loggedIn = status
    );
    console.log('isLogged', this.loggedIn);
  }

  logout(): void {
    this.userService.logout();
  }

}
