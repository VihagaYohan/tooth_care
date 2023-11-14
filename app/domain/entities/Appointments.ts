import IAppointment from '../models/IAppointment';
import Patient from './Patient';
import Physician from './Physician';
import TreatmentType from './Treatment';
import {AppointmentStatus} from '../enums/Enum';
import IAppointmentDates from '../models/IAppointmentDates';

export default class Appointment implements IAppointment {
  constructor(
    public readonly appointmentId: number,
    public patient: Patient,
    public doctor: Physician,
    public appointmentDate: IAppointmentDates,
    public appointmentFee: number,
    public treatmentType: TreatmentType[],
    public status: AppointmentStatus,
  ) {}
}
