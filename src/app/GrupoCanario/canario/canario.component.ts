import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanarioService } from '../../services/Canario/canario.service';
import { Canario } from '../../Models/Canario';
import { NotificacionService } from 'src/app/services/Notificacion/notificacion.service';

@Component({
  selector: 'app-canario',
  templateUrl: './canario.component.html',
  styleUrls: ['./canario.component.css'],
})
export class CanarioComponent implements OnInit {
  canario: Canario = new Canario();

  myUser: number = +localStorage.getItem('id_user')!;

  constructor(
    private rutaActiva: ActivatedRoute,
    private notificacionService: NotificacionService,
    private service: CanarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params.id;
    this.service.getData(id).subscribe(
      (result) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          if (iterator !== undefined && iterator !== null && iterator) {
            const c = new Canario();

            //Añadimos los valores al objeto
            c.id = iterator.id;
            c.anilla = iterator.num_anilla;
            c.nacimiento = iterator.fecha_nacimiento.split(' ')[0];
            c.id_usuario = iterator.id_usuario;
            c.anillaPadre = iterator.num_anilla_padre;
            c.anillaMadre = iterator.num_anilla_madre;
            c.url_img = iterator.url_img;
            c.sexo = iterator.sexo;
            c.modificacion = iterator.updated_at.split(' ')[0];
            c.creacion = iterator.created_at.split(' ')[0];

            // Comprueba si se ha dado de baja
            if (
              iterator.deleted_at !== undefined &&
              iterator.deleted_at !== null &&
              iterator.deleted_at !== ''
            ) {
              c.baja = iterator.deleted_at.split(' ')[0];
            } else {
              c.baja = '---';
            }

            this.canario = c;
          }
        }
      },
      (error) => {
        console.log('ERROR: ' + error);
      }
    );
  }

  borrar(id: number) {
    this.service.delete(id).subscribe(
      (result: any) => {
        console.log(result);

        $('.modal-backdrop').hide();

        this.router.navigate(['/canarios']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /**
   * Crea la notificación del intercambio
   *
   * @param {number} id ID del canario
   * @param {number} id_user ID del usuario
   * @memberof TablaCanarioUserComponent
   */
   intercambiar(id_canario: number, id_user: number) {
    const data = [{
      "id_from": localStorage.getItem('id_user'),
      "id_to": id_user,
      "contenido": id_canario
    }];

    this.notificacionService.enviarIntercambio(data).subscribe(
      (result: any) => {
        console.log(result);

        $('.modal-backdrop').hide();

        let currentUrl = this.router.url;
        this.router.navigate(["/canarios/user/" + this.canario.id_usuario])
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
