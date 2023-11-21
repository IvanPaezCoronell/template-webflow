import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdViewPageComponent } from './third-view-page.component';

describe('ThirdViewPageComponent', () => {
  let component: ThirdViewPageComponent;
  let fixture: ComponentFixture<ThirdViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdViewPageComponent]
    });
    fixture = TestBed.createComponent(ThirdViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
