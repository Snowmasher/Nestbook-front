import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevaAsociacionComponent } from './formulario-nueva-asociacion.component';

describe('FormularioNuevaAsociacionComponent', () => {
  let component: FormularioNuevaAsociacionComponent;
  let fixture: ComponentFixture<FormularioNuevaAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevaAsociacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevaAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
