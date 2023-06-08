import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailEvaluationsPage } from './detail-evaluations.page';

describe('DetailEvaluationsPage', () => {
  let component: DetailEvaluationsPage;
  let fixture: ComponentFixture<DetailEvaluationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailEvaluationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
