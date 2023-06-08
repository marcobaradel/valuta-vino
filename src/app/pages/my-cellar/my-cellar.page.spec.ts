import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCellarPage } from './my-cellar.page';

describe('MyCellarPage', () => {
  let component: MyCellarPage;
  let fixture: ComponentFixture<MyCellarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyCellarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
