import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateAndUndergraduateComponent } from './graduate-and-undergraduate.component';

describe('GraduateAndUndergraduateComponent', () => {
  let component: GraduateAndUndergraduateComponent;
  let fixture: ComponentFixture<GraduateAndUndergraduateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateAndUndergraduateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduateAndUndergraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
