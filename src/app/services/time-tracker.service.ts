
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { TimeInput } from './../models/timeInput.model';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackerService {

  toDuplicate;
  time = moment().toDate();
  timeTo = moment();

  timeInputsChanged = new Subject<TimeInput[]>();
  private timeInputs: TimeInput[] = [
    new TimeInput('it works!!!',
      '',
      '',
      true,
      this.time,
      this.time,
      this.time,
      '')
    ];

  constructor() { }

  getTimeInputs(): any {
    return this.timeInputs.slice();
  }

  addTimeInput(timeInput: TimeInput): any {
      this.timeInputs.unshift(timeInput);
      this.timeInputsChanged.next(this.timeInputs.slice());
      console.log(this.timeInputs);
  }

  deleteTimeInput(index: number): any {
      this.timeInputs.splice(index, 1);
      this.timeInputsChanged.next(this.timeInputs.slice());
  }

  duplicateTimeInput(index: number): any {
      this.toDuplicate = this.timeInputs.slice(index, index + 1);
      this.timeInputs = [...this.timeInputs, ...this.toDuplicate];
      this.timeInputsChanged.next(this.timeInputs.slice());
  }
}
