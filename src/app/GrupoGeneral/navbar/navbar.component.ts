import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';
import { UserService } from '../../services/Usuario/user.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'nestbook';
  loggedIn: Boolean | undefined;
  myControl = new FormControl();

  user = new User();
  users = new Array<string>();

  filteredOptions!: Observable<String[]>;

  constructor(private userService: UserService) {}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.users.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.loggedIn = this.userService.isUserLoggedIn();
    console.log('isLogged', this.loggedIn);

    const id: number = +localStorage.getItem('id_user')!;
    this.userService.getData(id).subscribe(
      (result: any) => {
        this.user = result[0];
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.userService.searchUsers().subscribe(
      (result: any) => {
        for (const iterator of result) {
          this.users.push(iterator.name + "#" + iterator.id);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  logout(): void {
    this.userService.logout();
  }
}
