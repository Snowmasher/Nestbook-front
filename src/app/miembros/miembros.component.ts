import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {

  @Input()
  miembros = [];

  constructor() { }

  ngOnInit(): void {
  }

}
