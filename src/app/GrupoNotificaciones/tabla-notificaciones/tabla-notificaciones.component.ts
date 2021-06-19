import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Notificacion } from 'src/app/Models/Notificacion';
import { NotificacionService } from 'src/app/services/Notificacion/notificacion.service';

@Component({
  selector: 'app-tabla-notificaciones',
  templateUrl: './tabla-notificaciones.component.html',
  styleUrls: ['./tabla-notificaciones.component.css']
})
export class TablaNotificacionesComponent implements OnInit, OnDestroy {

  //Datatable
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  myUser: number = +localStorage.getItem('id_user')!;

  notificaciones: Array<Notificacion> = [];

  constructor(private service: NotificacionService, private router: Router) { }

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

    this.service.getAllByUser(this.myUser).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const n = new Notificacion();

          n.id = iterator.id;
          n.id_from = iterator.id_from;
          n.id_to = iterator.id_to;
          n.tipo = iterator.tipo;
          n.contenido = iterator.contenido;
          n.aceptada = iterator.aceptada;
          n.created_at = iterator.created_at;
          n.updated_at = iterator.updated_at;
          n.deleted_at = iterator.deleted_at;

          this.notificaciones.push(n);
          this.dtTrigger.next();
        }
      },
      (error: any) => {
        console.log('ERROR: ' + error);
      }
    );

    $('#loader').fadeOut(500);
    $('.spinner-border').fadeOut(500);

    setTimeout(() => {
      $('*[id^="tabla"]').fadeIn();
    }, 600);
  }

  borrar(id: number) {
    this.service.delete(id).subscribe(
      (result: any) => {
        console.log(result);

        $('.modal-backdrop').hide();
        $('body').attr('class', '');
        $('#loader').fadeOut(500);

        let currentUrl = this.router.url;
        this.router
          .navigateByUrl('/')
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
