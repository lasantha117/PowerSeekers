import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirteenthQuestionComponent } from './thirteenth-question.component';

describe('ThirteenthQuestionComponent', () => {
  let component: ThirteenthQuestionComponent;
  let fixture: ComponentFixture<ThirteenthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirteenthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirteenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
