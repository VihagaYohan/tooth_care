import {Date} from '../enums/Enum';

export default interface IAppointment {
  patientId: number;
  doctorId: number;
  day: Date;
  startTime: string;
  endTime: string;
}
