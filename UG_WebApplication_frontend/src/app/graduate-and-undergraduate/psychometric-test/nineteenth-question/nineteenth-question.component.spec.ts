import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineteenthQuestionComponent } from './nineteenth-question.component';

describe('NineteenthQuestionComponent', () => {
  let component: NineteenthQuestionComponent;
  let fixture: ComponentFixture<NineteenthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineteenthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NineteenthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
