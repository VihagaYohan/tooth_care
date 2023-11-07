import IPerson from './IPerson';

export default interface IPatient extends IPerson {
  readonly appointmentId: number;
  address: string;
  telephone: string;
  treatmentId?: number;
  physicianId?: number;
  amount?: number;
}
