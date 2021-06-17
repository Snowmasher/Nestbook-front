import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Canario } from 'src/app/Models/Canario';
import { CanarioService } from 'src/app/services/Canario/canario.service';

@Component({
  selector: 'app-tabla-canario-user',
  templateUrl: './tabla-canario-user.component.html',
  styleUrls: ['./tabla-canario-user.component.css'],
})
export class TablaCanarioUserComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  user: any;
  canarios: Array<Canario> = [];
  id = this.rutaActiva.snapshot.params.id;

  constructor(
    private service: CanarioService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
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

    this.service.getByUser(this.id).subscribe(
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
            this.router.navigate([currentUrl]);
          });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
