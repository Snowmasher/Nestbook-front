import { CanarioService } from './../../services/Canario/canario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notificacion } from 'src/app/Models/Notificacion';
import { User } from 'src/app/Models/user';
import { NotificacionService } from 'src/app/services/Notificacion/notificacion.service';

@Component({
  selector: 'app-info-notificacion',
  templateUrl: './info-notificacion.component.html',
  styleUrls: ['./info-notificacion.component.css']
})
export class InfoNotificacionComponent implements OnInit {

  notificacion: Notificacion = new Notificacion();

  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private service: NotificacionService,
    private canarioService: CanarioService
  ) { }

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params.id;
    this.service.getData(id).subscribe(
      result => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const n = new Notificacion();

            // Añadimos los valores al objeto
            n.id = iterator.id;
            n.id_from = iterator.id_from;
            n.id_to = iterator.id_to;
            n.tipo = iterator.tipo;
            n.deleted_at = iterator.deleted_at;
            n.created_at = iterator.created_at;
            n.updated_at = iterator.updated_at;

            //Comprueba el tipo de notificacion
            if(n.tipo === 'U'){
              var u: User = new User();
              const cont = JSON.parse(iterator.contenido);

              u = cont;

              n.contenido = u;
            }
            else if(n.tipo === 'I'){
              n.contenido = iterator.contenido;
            }

            this.notificacion = n;
          }

        }
      },
      error => {
        console.log('ERROR: ' + error);
      }
    );
  }


  aceptarUser() {
    const data = [{
      "id" : this.notificacion.id,
      "user" : this.notificacion.contenido,
    }];

    this.service.crearUser(data).subscribe(
      (result: any) => {
        $(".modal-backdrop").hide();
        this.router.navigate(["/notificaciones"]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  rechazaUser() {
    this.service.rechazarUser(this.notificacion.id).subscribe(
      (result: any) => {
        $(".modal-backdrop").hide();
        this.router.navigate(["/notificaciones"]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  aceptarIntercambio() {
    const data = [{
      "id" : this.notificacion.id,
      "id_canario" : this.notificacion.contenido,
      "id_user": localStorage.getItem('id_user')
    }];
    this.service.aceptaIntercambio(data).subscribe(
      (result: any) => {
        $(".modal-backdrop").hide();
        console.log(result);
        this.router.navigate(["/notificaciones"]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  rechazarIntercambio() {
    this.service.rechazarIntercambio(this.notificacion.id).subscribe(
      (result: any) => {
        $(".modal-backdrop").hide();
        this.router.navigate(["/notificaciones"]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
