import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCanariosComponent } from './lista-canarios.component';

describe('ListaCanariosComponent', () => {
  let component: ListaCanariosComponent;
  let fixture: ComponentFixture<ListaCanariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCanariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCanariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
