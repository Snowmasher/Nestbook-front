import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanarioComponent } from './canario.component';

describe('CanarioComponent', () => {
  let component: CanarioComponent;
  let fixture: ComponentFixture<CanarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
