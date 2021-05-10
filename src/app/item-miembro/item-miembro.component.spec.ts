import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMiembroComponent } from './item-miembro.component';

describe('ItemMiembroComponent', () => {
  let component: ItemMiembroComponent;
  let fixture: ComponentFixture<ItemMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMiembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
