import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit, OnDestroy {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  miembros: Array<User> = [];

  constructor(private service: UserService) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json',
      },
      responsive: true,
      destroy: true
    };

    this.service.usersByAsoc().subscribe(
      (result: any) => {

        for (const user of result) {
          if (user.rol !== 'M' && user.rol !== 'A' && user.rol == 'U'){
            const u = new User();

            u.id = user.id;
            u.name = user.name;
            u.real_name = user.real_name;
            u.email = user.email;

            this.miembros.push(u);
            this.dtTrigger.next();
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
