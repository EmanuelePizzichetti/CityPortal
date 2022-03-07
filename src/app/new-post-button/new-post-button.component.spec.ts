import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostButtonComponent } from './new-post-button.component';

describe('NewPostButtonComponent', () => {
  let component: NewPostButtonComponent;
  let fixture: ComponentFixture<NewPostButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
