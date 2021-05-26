import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBarUserComponent } from './info-bar-user.component';

describe('InfoBarUserComponent', () => {
  let component: InfoBarUserComponent;
  let fixture: ComponentFixture<InfoBarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
