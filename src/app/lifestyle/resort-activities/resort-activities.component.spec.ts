import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortActivitiesComponent } from './resort-activities.component';

describe('ResortActivitiesComponent', () => {
  let component: ResortActivitiesComponent;
  let fixture: ComponentFixture<ResortActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResortActivitiesComponent]
    });
    fixture = TestBed.createComponent(ResortActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
