import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthQuestionComponent } from './sixth-question.component';

describe('SixthQuestionComponent', () => {
  let component: SixthQuestionComponent;
  let fixture: ComponentFixture<SixthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
