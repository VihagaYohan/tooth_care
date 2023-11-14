import Appointment from '../domain/entities/Appointments';
import {AppointmentStatus} from '../domain/enums/Enum';
import {AppointmentSlots} from './appointment_dates';
import {Patients} from './patients';
import {Physicians} from './physicians';
import {Treatments} from './treatments';

const Appointments: Appointment[] = [
  /* new Appointment(
    1,
    Patients[0],
    Physicians[0],
    AppointmentSlots[0],
    1000,
    [Treatments[0], Treatments[1]],
    AppointmentStatus.Confirmed,
  ), */
];

export default Appointments;
