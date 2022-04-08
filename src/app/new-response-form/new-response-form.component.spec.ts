import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResponseFormComponent } from './new-response-form.component';

describe('NewResponseFormComponent', () => {
  let component: NewResponseFormComponent;
  let fixture: ComponentFixture<NewResponseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResponseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResponseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
