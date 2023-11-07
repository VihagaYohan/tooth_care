import {Date} from '../enums/Enum';

export default interface IAppointment {
  day: Date;
  startTime: string;
  endTime: string;
}
