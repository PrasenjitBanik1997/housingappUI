import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsaboutsiteComponent } from './detailsaboutsite.component';

describe('DetailsaboutsiteComponent', () => {
  let component: DetailsaboutsiteComponent;
  let fixture: ComponentFixture<DetailsaboutsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsaboutsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsaboutsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
