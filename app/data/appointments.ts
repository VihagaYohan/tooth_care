import Appointment from '../domain/entities/Appointments';
import {AppointmentStatus} from '../domain/enums/Enum';
import {AppointmentSlots} from './appointment_dates';
import AppointmentStatusList from './appointment_status';
import {Patients} from './patients';
import {Physicians} from './physicians';
import {Treatments} from './treatments';

const Appointments: Appointment[] = [
  new Appointment(
    1,
    Patients[0],
    Physicians[1],
    AppointmentSlots[0],
    1000,
    [Treatments[0], Treatments[1]],
    AppointmentStatusList[0],
  ),
  new Appointment(
    2,
    Patients[1],
    Physicians[1],
    AppointmentSlots[1],
    1000,
    [Treatments[2]],
    AppointmentStatusList[0],
  ),
];

export default Appointments;
