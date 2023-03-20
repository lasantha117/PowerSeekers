import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthQuestionComponent } from './eighth-question.component';

describe('EighthQuestionComponent', () => {
  let component: EighthQuestionComponent;
  let fixture: ComponentFixture<EighthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EighthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
