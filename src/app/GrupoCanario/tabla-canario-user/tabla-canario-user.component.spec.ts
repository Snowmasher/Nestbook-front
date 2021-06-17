import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCanarioUserComponent } from './tabla-canario-user.component';

describe('TablaCanarioUserComponent', () => {
  let component: TablaCanarioUserComponent;
  let fixture: ComponentFixture<TablaCanarioUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCanarioUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCanarioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
