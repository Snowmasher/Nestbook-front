import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoCanarioComponent } from './formulario-nuevo-canario.component';

describe('FormularioNuevoCanarioComponent', () => {
  let component: FormularioNuevoCanarioComponent;
  let fixture: ComponentFixture<FormularioNuevoCanarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoCanarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoCanarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
