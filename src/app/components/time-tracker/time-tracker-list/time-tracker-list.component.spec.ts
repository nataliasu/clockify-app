import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerListComponent } from './time-tracker-list.component';

describe('TimeTrackerListComponent', () => {
  let component: TimeTrackerListComponent;
  let fixture: ComponentFixture<TimeTrackerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
