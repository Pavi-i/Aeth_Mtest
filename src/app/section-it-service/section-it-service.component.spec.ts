import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionItServiceComponent } from './section-it-service.component';

describe('SectionItServiceComponent', () => {
  let component: SectionItServiceComponent;
  let fixture: ComponentFixture<SectionItServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionItServiceComponent]
    });
    fixture = TestBed.createComponent(SectionItServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
