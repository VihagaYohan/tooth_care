import {Patient, Physician, TreatmentType} from '../entities';
import {AppointmentStatus, Date} from '../enums/Enum';
import IAppointmentDates from './IAppointmentDates';

export default interface IAppointment {
  appointmentId: number;
  patient: Patient;
  doctor: Physician;
  appointmentDate: IAppointmentDates;
  appointmentFee: number;
  treatmentType?: TreatmentType[];
  status: AppointmentStatus;
}
