import { UserService } from './../../services/Usuario/user.service';
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
  desde!: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private service: NotificacionService,
    private canarioService: CanarioService,
    private userService: UserService
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

            this.userService.getData(n.id_from).subscribe(
              (result: any) => {this.desde = result[0].name}
            );

            //Comprueba el tipo de notificacion
            if(n.tipo === 'U'){
              var u: User = new User();
              const cont = JSON.parse(iterator.contenido);

              u = cont;

              n.contenido = u;
            }
            else if(n.tipo === 'I'){
              this.canarioService.getData(iterator.contenido).subscribe(
                (result: any) => n.contenido = result[0].num_anilla
              );
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
      "id_notificacion" : this.notificacion.id,
      "id_canario" : this.notificacion.contenido,
      "id_user": this.notificacion.id_from
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
