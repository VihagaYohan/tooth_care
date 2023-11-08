import IPerson from './IPerson';
import IAppointment from './IAppointment';

export default interface IPhysician extends IPerson {
  readonly doctorId: number;
  availableDates: IAppointment[];
  availability: boolean;
  telephone: string;
  changeAvailability(status: boolean): void;
  changeAvailableDates(availableDates: IAppointment[]): void;
}
