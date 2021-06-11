
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-tabla-moderadores',
  templateUrl: './tabla-moderadores.component.html',
  styleUrls: ['./tabla-moderadores.component.css']
})
export class TablaModeradoresComponent implements OnInit, OnDestroy {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  moderadores: Array<User> = [];

  constructor(private service: UserService) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json',
      },
      responsive: true
    };

    this.service.getAllPossibleMods().subscribe(
      (result: any) => {

        for (const user of result) {
          if (user.rol !== 'U' && user.rol !== 'A' && user.rol == 'M'){
            const u = new User();

            u.id = user.id;
            u.name = user.name;
            u.real_name = user.real_name;
            u.id_asociacion = user.id_asociacion;
            u.email = user.email;

            this.moderadores.push(u);

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
