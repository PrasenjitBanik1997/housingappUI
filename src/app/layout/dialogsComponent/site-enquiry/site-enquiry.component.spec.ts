import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEnquiryComponent } from './site-enquiry.component';

describe('SiteEnquiryComponent', () => {
  let component: SiteEnquiryComponent;
  let fixture: ComponentFixture<SiteEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
