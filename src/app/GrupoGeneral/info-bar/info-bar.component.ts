import { Asociacion } from './../../Models/Asociacion';
import { AsociacionService } from '../../services/Asociacion/asociacion.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {
  asociacion: Asociacion = new Asociacion();
  constructor(
    private service: AsociacionService,
    private http: HttpClient
    ) { }

  async ngOnInit(){

    const id_asociacion:number = +localStorage.getItem('id_asociacion')!;

        this.service.getData(id_asociacion).subscribe(
          (      result: any) => {
            this.asociacion.id = result[0].id;
            this.asociacion.id_mod = result[0].id_mod;
            this.asociacion.nombre = result[0].nombre;
          },
          (      error: any) => {
            console.log(error);
          }
        )
      }
  }

