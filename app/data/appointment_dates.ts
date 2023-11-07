import {Date} from '../domain/enums/Enum';
import IAppointment from '../domain/models/IAppointment';

export const Appointments: IAppointment[] = [
  {
    day: Date.Monday,
    startTime: '06.00 pm',
    endTime: '09.30 pm',
  },
  {
    day: Date.Wednesday,
    startTime: '06.00 pm',
    endTime: '09.30 pm',
  },
  {
    day: Date.Saturday,
    startTime: '03.00 pm',
    endTime: '10.00 pm',
  },
  {
    day: Date.Sunday,
    startTime: '03.00 pm',
    endTime: '10.00 pm',
  },
];
