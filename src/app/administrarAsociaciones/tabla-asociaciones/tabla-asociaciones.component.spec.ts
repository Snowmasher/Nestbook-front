import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsociacionesComponent } from './tabla-asociaciones.component';

describe('TablaAsociacionesComponent', () => {
  let component: TablaAsociacionesComponent;
  let fixture: ComponentFixture<TablaAsociacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAsociacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAsociacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
