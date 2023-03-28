import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthQustionComponent } from './tenth-qustion.component';

describe('TenthQustionComponent', () => {
  let component: TenthQustionComponent;
  let fixture: ComponentFixture<TenthQustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenthQustionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenthQustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
