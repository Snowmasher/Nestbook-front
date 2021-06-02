import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/Usuario/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-user-selected',
  templateUrl: './user-selected.component.html',
  styleUrls: ['./user-selected.component.css']
})
export class UserSelectedComponent implements OnInit {

  user: User = new User();

  constructor(
    private rutaActiva: ActivatedRoute,
    private service: UserService
  ) { }

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params.id;
    this.service.getData(id).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const u = new User();

            // Añadimos los valores al objeto
            u.id = iterator.id;
            u.id_asociacion = iterator.id_asociacion;
            u.name = (iterator.name);
            u.real_name = iterator.real_name;
            u.rol = iterator.rol;
            u.email = iterator.email;
            u.created_at = (iterator.created_at).split(' ')[0];
            u.updated_at = (iterator.updated_at).split(' ')[0];

            // Comprueba si se ha dado de baja
            if(iterator.deleted_at !== undefined && iterator.deleted_at !== null && iterator.deleted_at !== ''){
              u.deleted_at = (iterator.deleted_at).split(' ')[0];
            }
            else{
              u.deleted_at = '---';
            }

            this.user = u;
          }

        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
