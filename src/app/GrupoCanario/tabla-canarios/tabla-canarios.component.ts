import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { CanarioService } from 'src/app/services/Canario/canario.service';
import { Canario } from '../../Models/Canario';

@Component({
  selector: 'app-tabla-canarios',
  templateUrl: './tabla-canarios.component.html',
  styleUrls: ['./tabla-canarios.component.css']
})
export class TablaCanariosComponent implements OnInit, OnDestroy {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  user: any;
  canarios: Array<Canario> = [];

  constructor(private service: CanarioService) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  ngOnInit() {

    this.service.getByUser(+localStorage.getItem('id_user')!).subscribe(
      (      result: any) => {
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
      (      error: string) => {
        console.log('ERROR: ' + error);
      }
    );
  }

}
