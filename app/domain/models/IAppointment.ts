import {Patient, Physician, TreatmentType} from '../entities';
import {AppointmentStatus, Date} from '../enums/Enum';

export default interface IAppointment {
  appointmentId: number;
  patientId: Patient;
  doctorId: Physician;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  appointmentFee: number;
  treatmentType: TreatmentType[];
  status: AppointmentStatus;
}
