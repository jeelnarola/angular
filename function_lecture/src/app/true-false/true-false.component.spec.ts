import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseComponent } from './true-false.component';

describe('TrueFalseComponent', () => {
  let component: TrueFalseComponent;
  let fixture: ComponentFixture<TrueFalseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrueFalseComponent]
    });
    fixture = TestBed.createComponent(TrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
