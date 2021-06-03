import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociacionSelectedComponent } from './asociacion-selected.component';

describe('AsociacionSelectedComponent', () => {
  let component: AsociacionSelectedComponent;
  let fixture: ComponentFixture<AsociacionSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociacionSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociacionSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
