import {Date} from '../enums/Enum';
import IAppointmentDates from '../models/IAppointmentDates';

class AppointmentDates implements IAppointmentDates {
  constructor(
    public readonly id: number,
    public day: Date,
    public startTime: string,
    public endTime: string,
    public readonly title: string,
  ) {
    this.title = `${this.day} - ${this.startTime} - ${this.endTime}`;
  }
}

export default AppointmentDates;
