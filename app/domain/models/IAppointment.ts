import {Patient, Physician, TreatmentType} from '../entities';
import {AppointmentStatus, Date} from '../enums/Enum';
import IAppointmentDates from './IAppointmentDates';

export default interface IAppointment {
  appointmentId: number;
  patientId: Patient;
  doctorId: Physician;
  appointmentDate: IAppointmentDates;
  appointmentFee: number;
  treatmentType: TreatmentType[];
  status: AppointmentStatus;
}
