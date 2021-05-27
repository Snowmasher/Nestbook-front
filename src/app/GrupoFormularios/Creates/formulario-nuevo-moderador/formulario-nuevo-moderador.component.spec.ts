import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoModeradorComponent } from './formulario-nuevo-moderador.component';

describe('FormularioNuevoModeradorComponent', () => {
  let component: FormularioNuevoModeradorComponent;
  let fixture: ComponentFixture<FormularioNuevoModeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoModeradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
