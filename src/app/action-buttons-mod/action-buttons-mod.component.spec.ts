import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonsModComponent } from './action-buttons-mod.component';

describe('ActionButtonsModComponent', () => {
  let component: ActionButtonsModComponent;
  let fixture: ComponentFixture<ActionButtonsModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonsModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonsModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
