import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TimeInput } from 'src/app/models/timeInput.model';
import { TimeTrackerService } from 'src/app/services/time-tracker.service';

@Component({
  selector: 'app-time-tracker-list',
  templateUrl: './time-tracker-list.component.html',
  styleUrls: ['./time-tracker-list.component.scss']
})
export class TimeTrackerListComponent implements OnInit {

  @ViewChild('f', { static: false }) ttForm: NgForm;
  @Input() projects;
  @Input() tags;
  @Input() timeCounter;
  @Input() play;
  @Input() interval;
  timeInputs: TimeInput[];
    private subscription: Subscription;

  constructor(private ttService: TimeTrackerService) { }

  ngOnInit(): void {
    this.timeInputs = this.ttService.getTimeInputs();
    this.subscription = this.ttService.timeInputsChanged.subscribe(
        (timeInputs: TimeInput[] ) => {
            this.timeInputs = timeInputs;
        }
    );
  }

  // TODO: connect startTime() to child OR make this continueTime() work
  continueTime(): any {
    this.play = true;
    this.interval = setInterval( () => {
        this.timeCounter++;
    }, 1000);
  }

  onDelete(i): any {
      this.ttService.deleteTimeInput(i);
  }

  onDuplicate(i): any {
      this.ttService.duplicateTimeInput(i);
  }

}
