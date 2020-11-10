import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { TimeInput } from 'src/app/models/timeInput.model';
import { TimeTrackerService } from 'src/app/services/time-tracker.service';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimeTrackerComponent implements OnInit {

  timeForm: FormGroup;

  public show = false;
  public timeCounter = 0;
  play = false;
  interval;

  timeInputs: TimeInput[];
  // to przerzucić do shared i importować
  tags = ['No tag', 'tag 1', 'tag 2'];
  projects = ['No project', 'coś', 'coś 2'];

  selectedProject = 'No project';
  selectedTag = 'No tag';

  timeFrom = moment();
  timeTo = moment();
  date = moment().toDate();

  constructor(private ttService: TimeTrackerService) { }

  ngOnInit(): void {
    this.timeForm = new FormGroup({
      desc: new FormControl(null),
      project: new FormControl(this.selectedProject),
      tag: new FormControl(this.selectedTag),
      billable: new FormControl(false),
      timeFrom: new FormControl(this.timeFrom),
      timeTo: new FormControl(this.timeTo),
      date: new FormControl(this.date),
      countedTime: new FormControl()
  });

    this.timeInputs = this.ttService.getTimeInputs();
    this.ttService.timeInputsChanged.subscribe(
      (timeInputs: TimeInput[]) => {
          this.timeInputs = timeInputs;
      }
    );
  }


  toggle(): any {
    this.show = !this.show;
}

startTimer(): any {
    this.play = true;
    this.interval = setInterval(() => {
        this.timeCounter++;
    }, 1000);
}

stopTimer(): any {
    this.play = false;
    clearInterval(this.interval);
    this.timeTo.add(this.timeCounter, 'second');
}

onSubmit(): any {
    const value = this.timeForm.value;
    const newTimeInput = new TimeInput(
        value.desc,
        this.selectedProject,
        this.selectedTag,
        value.billable,
        value.timeFrom,
        value.timeTo,
        value.date,
        this.timeCounter);
    this.ttService.addTimeInput(newTimeInput);
    this.timeForm.reset({
        project: this.selectedProject,
        tag: this.selectedTag,
        timeFrom: this.timeFrom,
        timeTo: this.timeTo,
        date: this.date,
        countedTime: this.timeCounter,
    });
    this.timeCounter = 0;
    console.log(this.selectedProject);
    console.log(this.selectedTag);
}

}
