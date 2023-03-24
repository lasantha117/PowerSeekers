import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewVacancyMarksComponent } from './preview-vacancy-marks.component';

describe('PreviewVacancyMarksComponent', () => {
  let component: PreviewVacancyMarksComponent;
  let fixture: ComponentFixture<PreviewVacancyMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewVacancyMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewVacancyMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
