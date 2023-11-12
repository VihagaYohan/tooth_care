import IAppointment from '../models/IAppointment';
import TreatmentType from './Treatment';

export default class Appointment implements IAppointment {
  constructor(
    public readonly appointmentId: number,
    public patientId: number,
    public doctorId: number,
    public appointmentDate: string,
    public startTime: string,
    public endTime: string,
    public appointmentFee: number,
    public treatmentType: TreatmentType,
  ) {}
}
