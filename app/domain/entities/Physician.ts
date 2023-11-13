import {Person} from '../base/index';
import {Gender} from '../enums/Enum';
import IAppointment from '../models/IAppointment';
import IPhysician from '../models/IPhysician';

export default class Physician extends Person implements IPhysician {
  constructor(
    public readonly id: number,
    title: string,
    firstName: string,
    lastName: string,
    age: number,
    public gender: Gender,
    public telephone: string,
    public availableDates: IAppointment[],
    public availability: boolean,
  ) {
    super(title, firstName, lastName, age, gender);
  }

  changeAvailability(status: boolean): void {
    this.availability = status;
  }

  changeAvailableDates(availableDates: IAppointment[]): void {
    this.availableDates = availableDates;
  }
}
