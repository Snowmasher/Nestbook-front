import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNotificacionComponent } from './info-notificacion.component';

describe('InfoNotificacionComponent', () => {
  let component: InfoNotificacionComponent;
  let fixture: ComponentFixture<InfoNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
