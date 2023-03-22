import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenthQuestionComponent } from './fourteenth-question.component';

describe('FourteenthQuestionComponent', () => {
  let component: FourteenthQuestionComponent;
  let fixture: ComponentFixture<FourteenthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourteenthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourteenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
