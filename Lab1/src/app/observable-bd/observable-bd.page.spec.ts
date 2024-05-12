import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableBdPage } from './observable-bd.page';

describe('ObservableBdPage', () => {
  let component: ObservableBdPage;
  let fixture: ComponentFixture<ObservableBdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObservableBdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
