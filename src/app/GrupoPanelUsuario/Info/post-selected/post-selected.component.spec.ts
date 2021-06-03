import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSelectedComponent } from './post-selected.component';

describe('PostSelectedComponent', () => {
  let component: PostSelectedComponent;
  let fixture: ComponentFixture<PostSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
