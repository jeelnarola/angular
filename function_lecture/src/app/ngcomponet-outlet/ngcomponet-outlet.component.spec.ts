import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcomponetOutletComponent } from './ngcomponet-outlet.component';

describe('NgcomponetOutletComponent', () => {
  let component: NgcomponetOutletComponent;
  let fixture: ComponentFixture<NgcomponetOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcomponetOutletComponent]
    });
    fixture = TestBed.createComponent(NgcomponetOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
