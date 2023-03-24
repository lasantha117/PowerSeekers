import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixteenthQuestionComponent } from './sixteenth-question.component';

describe('SixteenthQuestionComponent', () => {
  let component: SixteenthQuestionComponent;
  let fixture: ComponentFixture<SixteenthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixteenthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixteenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
