import { AsociacionService } from '../../services/Asociacion/asociacion.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {
  info: any;
  idAsoc!: number;
  asociacion: any;
  url = 'http://localhost:8000/api/asociacion/';
  constructor(private service: AsociacionService, private http: HttpClient,) { }

  async ngOnInit(){

    //this.asociacion = await this.service.getAsocInfoBar();
    let res: any;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get('http://localhost:8000/api/user', { headers }).toPromise().then(
      result => {
        console.log(result);
        res = result;
        this.asociacion = res.id_asociacion;
      },
      error => {
        console.log(error);
      }
    ).finally(
      () => {
        this.url = this.url + this.asociacion;
        this.http.get(this.url).toPromise().then(
          (      result: any) => {
            console.log(result);
            this.asociacion = result;
          },
          (      error: any) => {
            console.log(error);
          }
        ).finally(
          this.asociacion = this.info
        );
      }
    );
  }
  }

