import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCanarioComponent } from './update-canario.component';

describe('UpdateCanarioComponent', () => {
  let component: UpdateCanarioComponent;
  let fixture: ComponentFixture<UpdateCanarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCanarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCanarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
