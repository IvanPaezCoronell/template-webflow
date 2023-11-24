import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThirdSectionComponent } from './header-third-section.component';

describe('HeaderThirdSectionComponent', () => {
  let component: HeaderThirdSectionComponent;
  let fixture: ComponentFixture<HeaderThirdSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderThirdSectionComponent]
    });
    fixture = TestBed.createComponent(HeaderThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
