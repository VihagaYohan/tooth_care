import Appointment from '../domain/entities/Appointments';
import {Treatments} from './treatments';

const Appointments: Appointment[] = [
  new Appointment(
    1,
    1,
    1,
    '2023-05-04T18:00',
    '06.00 pm',
    '06.30 pm',
    1000,
    Treatments[0],
  ),
];

export default Appointments;
