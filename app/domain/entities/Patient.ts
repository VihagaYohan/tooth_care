import {Person} from '../base';
import IPatient from '../models/IPatient';
import {Gender} from '../enums/Enum';

export default class Patient extends Person implements IPatient {
  constructor(
    public readonly id: number,
    title: string,
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    public address: string,
    public telephone: string,
    public treatmentId?: number,
    public physicianId?: number,
    public amount?: number,
  ) {
    super(title, firstName, lastName, age, gender);
  }
}
