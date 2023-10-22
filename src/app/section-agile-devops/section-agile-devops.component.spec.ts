import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAgileDevopsComponent } from './section-agile-devops.component';

describe('SectionAgileDevopsComponent', () => {
  let component: SectionAgileDevopsComponent;
  let fixture: ComponentFixture<SectionAgileDevopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAgileDevopsComponent]
    });
    fixture = TestBed.createComponent(SectionAgileDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
