import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewEvaluationsPage } from './new-evaluations.page';

describe('NewEvaluationsPage', () => {
  let component: NewEvaluationsPage;
  let fixture: ComponentFixture<NewEvaluationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewEvaluationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
