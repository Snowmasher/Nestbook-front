import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaModeradoresComponent } from './tabla-moderadores.component';

describe('TablaModeradoresComponent', () => {
  let component: TablaModeradoresComponent;
  let fixture: ComponentFixture<TablaModeradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaModeradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaModeradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
