import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifteenthQuestionComponent } from './fifteenth-question.component';

describe('FifteenthQuestionComponent', () => {
  let component: FifteenthQuestionComponent;
  let fixture: ComponentFixture<FifteenthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifteenthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifteenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
