import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthQuestionComponent } from './ninth-question.component';

describe('NinthQuestionComponent', () => {
  let component: NinthQuestionComponent;
  let fixture: ComponentFixture<NinthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinthQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
