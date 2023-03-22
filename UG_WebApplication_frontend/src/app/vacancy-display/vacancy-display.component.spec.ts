import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDisplayComponent } from './vacancy-display.component';

describe('VacancyDisplayComponent', () => {
  let component: VacancyDisplayComponent;
  let fixture: ComponentFixture<VacancyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
