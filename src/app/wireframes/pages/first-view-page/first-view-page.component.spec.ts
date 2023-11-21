import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstViewPageComponent } from './first-view-page.component';

describe('FirstViewPageComponent', () => {
  let component: FirstViewPageComponent;
  let fixture: ComponentFixture<FirstViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstViewPageComponent]
    });
    fixture = TestBed.createComponent(FirstViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
