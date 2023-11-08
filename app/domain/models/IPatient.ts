import {Gender} from '../enums/Enum';
import IPerson from './IPerson';

export default interface IPatient extends IPerson {
  readonly appointmentId: number;
  address: string;
  gender: Gender;
  telephone: string;
  treatmentId?: number;
  physicianId?: number;
  amount?: number;
}
