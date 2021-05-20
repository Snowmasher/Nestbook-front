import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-miembro',
  templateUrl: './item-miembro.component.html',
  styleUrls: ['./item-miembro.component.css']
})
export class ItemMiembroComponent implements OnInit {

  @Input()
  miembro: any;

  constructor() { }

  ngOnInit(): void {
  }

}
