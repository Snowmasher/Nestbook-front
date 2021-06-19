import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CanarioService } from 'src/app/services/Canario/canario.service';
import { UserService } from 'src/app/services/Usuario/user.service';
import { Canario } from '../../Models/Canario';

@Component({
  selector: 'app-tabla-canarios',
  templateUrl: './tabla-canarios.component.html',
  styleUrls: ['./tabla-canarios.component.css'],
})
export class TablaCanariosComponent implements OnInit, OnDestroy {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  user: any;
  canarios: Array<Canario> = [];

  constructor(
    private service: CanarioService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
    const myId: number = +localStorage.getItem('id_user')!;
    //Subscribe para restringir la entrada
    this.userService.getData(myId).subscribe(
      (result: any) => {
        for (const i of JSON.parse(JSON.stringify(result))) {
          if (i.rol === 'A') {
            this.router.navigate(['/panel']);
          }
        }
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );

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

    this.service.getByUser(+localStorage.getItem('id_user')!).subscribe(
      (result: any) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const c = new Canario();

          c.id = iterator.id;
          c.anilla = iterator.num_anilla;
          c.nacimiento = iterator.fecha_nacimiento;
          c.anillaPadre = iterator.num_anilla_padre;
          c.anillaMadre = iterator.num_anilla_madre;
          c.sexo = iterator.sexo;
          this.canarios.push(c);
          this.dtTrigger.next();
        }
      },
      (error: string) => {
        console.log('ERROR: ' + error);
      }
    );

    $('#loader').fadeOut('500');

    setTimeout(() => {
      $('*[id^="tabla"]').fadeIn();
    }, 800);
  }

  borrar(id: number) {
    this.service.delete(id).subscribe(
      (result: any) => {
        console.log(result);

        $('.modal-backdrop').hide();

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
