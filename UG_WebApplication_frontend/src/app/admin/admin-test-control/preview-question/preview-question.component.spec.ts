import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuestionComponent } from './preview-question.component';

describe('PreviewQuestionComponent', () => {
  let component: PreviewQuestionComponent;
  let fixture: ComponentFixture<PreviewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
