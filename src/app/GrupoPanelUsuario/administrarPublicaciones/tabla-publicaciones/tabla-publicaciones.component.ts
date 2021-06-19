import { PublicacionService } from 'src/app/services/Publicacion/publicacion.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/Post';

@Component({
  selector: 'app-tabla-publicaciones',
  templateUrl: './tabla-publicaciones.component.html',
  styleUrls: ['./tabla-publicaciones.component.css'],
})
export class TablaPublicacionesComponent implements OnDestroy, OnInit {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  publicaciones: Array<Post> = [];

  constructor(private service: PublicacionService, private router: Router) {}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {

    $('*[id^="tabla"]').hide();
    $("#loader").show();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json',
      },
      responsive: true,
      destroy: true
    };

    this.service.getPosts().subscribe(
      (result) => {
        for (const iterator of JSON.parse(JSON.stringify(result))) {
          const p = new Post();

          p.id = iterator.id;
          p.id_asociacion = iterator.id_asociacion;
          p.titulo = iterator.titulo;
          p.contenido = iterator.contenido;
          p.created_at = new Date(iterator.created_at).toUTCString();
          p.updated_at = new Date(iterator.updated_at).toUTCString();
          this.publicaciones.push(p);
        }

        this.dtTrigger.next();
      },
      (error) => {
        console.log('ERROR: ' + error);
      }
    );


    $("#loader").fadeOut('500');

    setTimeout(
      () => {
        $('*[id^="tabla"]').fadeIn();
      },
      800
    );

  }

  borrar(id: number) {
    this.service.delete(id).subscribe(
      (result: any) => {

        console.log(result);

        $(".modal-backdrop").hide();

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
