import Patient from '../domain/entities/Patient';
import {Gender} from '../domain/enums/Enum';

export const Patients: Patient[] = [
  new Patient(
    1,
    'Mr',
    'John',
    'Doe',
    18,
    Gender.Male,
    'Sample address 1',
    '018988373',
    undefined,
    undefined,
    undefined,
  ),
];
