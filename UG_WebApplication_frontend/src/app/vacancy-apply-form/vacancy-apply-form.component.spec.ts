import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyApplyFormComponent } from './vacancy-apply-form.component';

describe('VacancyApplyFormComponent', () => {
  let component: VacancyApplyFormComponent;
  let fixture: ComponentFixture<VacancyApplyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyApplyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyApplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
