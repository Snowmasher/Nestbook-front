import { Component, OnDestroy, OnInit } from '@angular/core';
import { Asociacion } from '../../../Models/Asociacion';
import { AsociacionService } from 'src/app/services/Asociacion/asociacion.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/Usuario/user.service';

@Component({
  selector: 'app-tabla-asociaciones',
  templateUrl: './tabla-asociaciones.component.html',
  styleUrls: ['./tabla-asociaciones.component.css'],
})
export class TablaAsociacionesComponent implements OnInit, OnDestroy {
  //Datatable
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  asociaciones: Array<Asociacion> = [];

  constructor(
    private service: AsociacionService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    // Desuscribe el datatable cuando se destruye el componente
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    $('*[id^="tabla"]').hide();
    $('#loader').show();

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
    this.userService.getData(myId).subscribe(
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

    //subscribe para recoger todas las asociaciones
    this.service.getAll().subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const a = new Asociacion();

          a.id = iterator.id;
          a.id_mod = iterator.id_mod;
          a.nombre = iterator.nombre;
          a.created_at = iterator.created_at;
          this.asociaciones.push(a);
          this.dtTrigger.next();
        }
      },
      (error: any) => {
        console.log('ERROR: ' + error);
      }
    );

    $('#loader').fadeOut('500');

    setTimeout(() => {
      $('*[id^="tabla"]').fadeIn();
    }, 800);
  }


  borrar(id: number) {

    // Subscribe para borrar una asociacion
    this.service.delete(id).subscribe(
      (result: any) => {
        console.log(result);

        $('.modal-backdrop').hide();

        let currentUrl = this.router.url;
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([currentUrl]);
          });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
