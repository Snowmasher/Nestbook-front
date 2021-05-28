import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoPostComponent } from './formulario-nuevo-post.component';

describe('FormularioNuevoPostComponent', () => {
  let component: FormularioNuevoPostComponent;
  let fixture: ComponentFixture<FormularioNuevoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
