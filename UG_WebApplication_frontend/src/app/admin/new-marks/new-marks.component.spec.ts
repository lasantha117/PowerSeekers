import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMarksComponent } from './new-marks.component';

describe('NewMarksComponent', () => {
  let component: NewMarksComponent;
  let fixture: ComponentFixture<NewMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
