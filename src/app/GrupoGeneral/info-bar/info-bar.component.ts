import { AsociacionService } from '../../services/Asociacion/asociacion.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {
  asociacion: any;
  url = localStorage.getItem('url_api') + '/';
  constructor(
    private service: AsociacionService,
    private http: HttpClient
    ) { }

  async ngOnInit(){
        this.http.get(this.url + localStorage.getItem('id_asociacion')).subscribe(
          (      result: any) => {
            console.log(result);
            this.asociacion = result[0];
          },
          (      error: any) => {
            console.log(error);
          }
        )
      }
  }

