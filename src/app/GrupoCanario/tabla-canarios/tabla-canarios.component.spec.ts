import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCanariosComponent } from './tabla-canarios.component';

describe('TablaCanariosComponent', () => {
  let component: TablaCanariosComponent;
  let fixture: ComponentFixture<TablaCanariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCanariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCanariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
