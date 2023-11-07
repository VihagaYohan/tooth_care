import {Person} from '../base';
import IPatient from '../models/IPatient';

export default class Patient extends Person implements IPatient {
  constructor(
    public readonly appointmentId: number,
    title: string,
    firstName: string,
    lastName: string,
    age: number,
    public address: string,
    public telephone: string,
    public treatmentId?: number,
    public physicianId?: number,
    public amount?: number,
  ) {
    super(title, firstName, lastName, age);
  }
}
