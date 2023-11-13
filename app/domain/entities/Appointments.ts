import IAppointment from '../models/IAppointment';
import Patient from './Patient';
import Physician from './Physician';
import TreatmentType from './Treatment';
import {AppointmentStatus} from '../enums/Enum';

export default class Appointment implements IAppointment {
  constructor(
    public readonly appointmentId: number,
    public patientId: Patient,
    public doctorId: Physician,
    public appointmentDate: string,
    public startTime: string,
    public endTime: string,
    public appointmentFee: number,
    public treatmentType: TreatmentType[],
    public status: AppointmentStatus,
  ) {}
}
