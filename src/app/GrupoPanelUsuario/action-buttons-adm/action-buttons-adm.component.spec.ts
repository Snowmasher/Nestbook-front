import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonsAdmComponent } from './action-buttons-adm.component';

describe('ActionButtonsAdmComponent', () => {
  let component: ActionButtonsAdmComponent;
  let fixture: ComponentFixture<ActionButtonsAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonsAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonsAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
