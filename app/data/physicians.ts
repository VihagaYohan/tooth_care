import IPhysician from '../domain/models/IPhysician';
import {Physician} from '../domain/entities';
import {AppointmentDates} from './appointment_dates';
import {Gender} from '../domain/enums/Enum';

export const Physicians: IPhysician[] = [
  new Physician(
    1,
    'Dr',
    'John',
    'Doe',
    56,
    Gender.Male,
    '930399282',
    AppointmentDates,
    true,
  ),
  new Physician(
    2,
    'Dr',
    'Susan',
    'Doe',
    47,
    Gender.Feamel,
    '7499348783',
    AppointmentDates,
    true,
  ),
];
