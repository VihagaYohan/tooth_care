import {TreatmentType} from '../entities';
import {Date} from '../enums/Enum';

export default interface IAppointment {
  appointmentId: number;
  patientId: number;
  doctorId: number;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  appointmentFee: number;
  treatmentType: TreatmentType;
}
