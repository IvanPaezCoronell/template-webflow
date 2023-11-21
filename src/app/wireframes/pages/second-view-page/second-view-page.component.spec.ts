import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondViewPageComponent } from './second-view-page.component';

describe('SecondViewPageComponent', () => {
  let component: SecondViewPageComponent;
  let fixture: ComponentFixture<SecondViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondViewPageComponent]
    });
    fixture = TestBed.createComponent(SecondViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
