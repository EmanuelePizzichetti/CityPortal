import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResponseCardComponent } from './new-response-card.component';

describe('NewResponseCardComponent', () => {
  let component: NewResponseCardComponent;
  let fixture: ComponentFixture<NewResponseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResponseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResponseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
