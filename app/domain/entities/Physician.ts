import {Person} from '../base/index';
import IAppointment from '../models/IAppointment';
import IPhysician from '../models/IPhysician';

export default class Physician extends Person implements IPhysician {
  constructor(
    public readonly doctorId: number,
    title: string,
    firstName: string,
    lastName: string,
    age: number,
    public telephone: string,
    public availableDates: IAppointment[],
    public availability: boolean,
  ) {
    super(title, firstName, lastName, age);
  }

  changeAvailability(status: boolean): void {
    this.availability = status;
  }

  changeAvailableDates(availableDates: IAppointment[]): void {
    this.availableDates = availableDates;
  }
}
