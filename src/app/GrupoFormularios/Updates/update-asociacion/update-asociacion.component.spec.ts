import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAsociacionComponent } from './update-asociacion.component';

describe('UpdateAsociacionComponent', () => {
  let component: UpdateAsociacionComponent;
  let fixture: ComponentFixture<UpdateAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAsociacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
