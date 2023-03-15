import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAnswersComponent } from './preview-answers.component';

describe('PreviewAnswersComponent', () => {
  let component: PreviewAnswersComponent;
  let fixture: ComponentFixture<PreviewAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
