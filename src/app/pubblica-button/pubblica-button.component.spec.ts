import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubblicaButtonComponent } from './pubblica-button.component';

describe('PubblicaButtonComponent', () => {
  let component: PubblicaButtonComponent;
  let fixture: ComponentFixture<PubblicaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubblicaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubblicaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
