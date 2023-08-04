import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageComponent } from './assessment-page.component';

describe('AssessmentPageComponent', () => {
  let component: AssessmentPageComponent;
  let fixture: ComponentFixture<AssessmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentPageComponent]
    });
    fixture = TestBed.createComponent(AssessmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
