import {Date} from '../enums/Enum';

interface IAppointmentDates {
  id: number;
  day: Date;
  startTime: string;
  endTime: string;
  title?: string;
}

export default IAppointmentDates;
