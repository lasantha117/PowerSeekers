import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighteenthQuestionComponent } from './eighteenth-question.component';

describe('EighteenthQuestionComponent', () => {
  let component: EighteenthQuestionComponent;
  let fixture: ComponentFixture<EighteenthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighteenthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EighteenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
