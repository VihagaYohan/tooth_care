import {Person} from '../base';
import IPatient from '../models/IPatient';
import {Gender} from '../enums/Enum';

export default class Patient extends Person implements IPatient {
  constructor(
    public readonly appointmentId: number,
    title: string,
    firstName: string,
    lastName: string,
    age: number,
    public address: string,
    public gender: Gender,
    public telephone: string,
    public treatmentId?: number,
    public physicianId?: number,
    public amount?: number,
  ) {
    super(title, firstName, lastName, age);
  }
}
