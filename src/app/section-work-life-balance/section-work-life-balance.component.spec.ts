import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkLifeBalanceComponent } from './section-work-life-balance.component';

describe('SectionWorkLifeBalanceComponent', () => {
  let component: SectionWorkLifeBalanceComponent;
  let fixture: ComponentFixture<SectionWorkLifeBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionWorkLifeBalanceComponent]
    });
    fixture = TestBed.createComponent(SectionWorkLifeBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
