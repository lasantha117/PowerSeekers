import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestControlComponent } from './admin-test-control.component';

describe('AdminTestControlComponent', () => {
  let component: AdminTestControlComponent;
  let fixture: ComponentFixture<AdminTestControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTestControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTestControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
