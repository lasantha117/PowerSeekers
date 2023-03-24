import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelfthQuestionComponent } from './twelfth-question.component';

describe('TwelfthQuestionComponent', () => {
  let component: TwelfthQuestionComponent;
  let fixture: ComponentFixture<TwelfthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelfthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwelfthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
