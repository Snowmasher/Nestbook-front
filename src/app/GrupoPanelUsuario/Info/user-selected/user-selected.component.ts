import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/Usuario/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-user-selected',
  templateUrl: './user-selected.component.html',
  styleUrls: ['./user-selected.component.css'],
})
export class UserSelectedComponent implements OnInit {
  user: User = new User();
  myAsoc: number = +localStorage.getItem('id_asociacion')!;
  myUser: number = +localStorage.getItem('id_user')!;

  constructor(
    private rutaActiva: ActivatedRoute,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params.id;
    this.service.getData(id).subscribe(
      (result) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const u = new User();

            // Añadimos los valores al objeto
            u.id = iterator.id;
            u.id_asociacion = iterator.id_asociacion;
            u.name = iterator.name;
            u.real_name = iterator.real_name;
            u.rol = iterator.rol;
            u.email = iterator.email;
            u.created_at = iterator.created_at.split(' ')[0];
            u.updated_at = iterator.updated_at.split(' ')[0];

            this.user = u;
          }
        }
      },
      (error) => {
        console.log('ERROR: ' + error);
      }
    );
  }

  borrar(id: number) {
    if (this.user.rol === 'U') {
      this.service.delete(id).subscribe(
        (result: any) => {
          console.log(result);

          $('.modal-backdrop').hide();

          let currentUrl = this.router.url;
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/panel/adminUser']);
            });
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    else if(this.user.rol === 'M') {
      this.service.deleteMod(id).subscribe(
        (result: any) => {
          console.log(result);

          $('.modal-backdrop').hide();

          let currentUrl = this.router.url;
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/panel/adminMod']);
            });
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
