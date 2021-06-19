import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-tabla-moderadores',
  templateUrl: './tabla-moderadores.component.html',
  styleUrls: ['./tabla-moderadores.component.css'],
})
export class TablaModeradoresComponent implements OnInit, OnDestroy {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  moderadores: Array<User> = new Array<User>();

  constructor(private service: UserService, private router: Router) {}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {

    $('*[id^="tabla"]').hide();
    $("#loader").show();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json',
      },
      responsive: true,
      destroy: true,
    };

    const myId: number = +localStorage.getItem('id_user')!;

    //Subscribe para restringir la entrada
    this.service.getData(myId).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator.rol !== 'A') {
            this.router.navigate(['/panel']);
          }
        }
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );

    //Subscribe para recoger los moderadores
    this.service.getAllPossibleMods().subscribe(
      (result: any) => {
        for (const user of result) {
          if (user.rol !== 'U' && user.rol !== 'A' && user.rol == 'M') {
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


    $("#loader").fadeOut('500');

    setTimeout(
      () => {
        $('*[id^="tabla"]').fadeIn(500);
      },
      500
    );

  }

  borrar(id: number) {
    this.service.deleteMod(id).subscribe(
      (result: any) => {

        console.log(result);

        $(".modal-backdrop").hide();

        let currentUrl = this.router.url;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(["/panel"]);
          });


      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
