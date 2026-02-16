import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUtilities } from './common-utilities';

describe('CommonUtilities', () => {
  let component: CommonUtilities;
  let fixture: ComponentFixture<CommonUtilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonUtilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonUtilities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
