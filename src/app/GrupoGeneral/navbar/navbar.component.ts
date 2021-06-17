import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';
import { UserService } from '../../services/Usuario/user.service';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'nestbook';
  loggedIn: Boolean | undefined;
  myControl = new FormControl();
  form!: FormGroup;

  user = new User();
  userByName = new User();
  users = new Array<string>();

  filteredOptions!: Observable<String[]>;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.users.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
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
          this.users.push(iterator.name + '#' + iterator.id);
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

  onSubmit(): void {
    const name: string = "" + $('#userByName').val();

    this.userService.getDataByName(name).subscribe(
      (result: any) => {
        this.router.navigate(['/principal/user/' + result[0].id]);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
