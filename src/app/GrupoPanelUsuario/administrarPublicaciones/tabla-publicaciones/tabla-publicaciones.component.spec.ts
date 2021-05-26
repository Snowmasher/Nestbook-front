import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPublicacionesComponent } from './tabla-publicaciones.component';

describe('TablaPublicacionesComponent', () => {
  let component: TablaPublicacionesComponent;
  let fixture: ComponentFixture<TablaPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPublicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
