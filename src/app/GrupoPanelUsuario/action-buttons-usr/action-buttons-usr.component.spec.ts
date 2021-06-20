import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonsUsrComponent } from './action-buttons-usr.component';

describe('ActionButtonsUsrComponent', () => {
  let component: ActionButtonsUsrComponent;
  let fixture: ComponentFixture<ActionButtonsUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonsUsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonsUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
