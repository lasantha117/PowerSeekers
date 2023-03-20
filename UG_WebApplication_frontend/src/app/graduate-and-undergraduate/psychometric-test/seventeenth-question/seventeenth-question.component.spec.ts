import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventeenthQuestionComponent } from './seventeenth-question.component';

describe('SeventeenthQuestionComponent', () => {
  let component: SeventeenthQuestionComponent;
  let fixture: ComponentFixture<SeventeenthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventeenthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventeenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
