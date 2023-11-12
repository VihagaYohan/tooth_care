import Patient from '../domain/entities/Patient';
import {Gender} from '../domain/enums/Enum';

export const Patients: Patient[] = [
  new Patient(
    1,
    'Mr',
    'Peter',
    'Stewart',
    23,
    'address sample 1',
    Gender.Male,
    '0987654321',
    1,
    1,
  ),
];
