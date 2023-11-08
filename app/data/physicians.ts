import IPhysician from '../domain/models/IPhysician';
import {Physician} from '../domain/entities';
import {AppointmentDates} from './appointment_dates';

export const Physicians: IPhysician[] = [
  new Physician(
    1,
    'Dr',
    'John',
    'Doe',
    56,
    '930399282',
    AppointmentDates,
    true,
  ),
];
