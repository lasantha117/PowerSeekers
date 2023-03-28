import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentiethQuestionComponent } from './twentieth-question.component';

describe('TwentiethQuestionComponent', () => {
  let component: TwentiethQuestionComponent;
  let fixture: ComponentFixture<TwentiethQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwentiethQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwentiethQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
