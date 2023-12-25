import {Date} from '../domain/enums/Enum';
import AppointmentDates from '../domain/entities/AppointmentDates';

export const AppointmentSlots: AppointmentDates[] = [
  new AppointmentDates(1, Date.Monday, '06.00 pm', '06.30 pm'),
  new AppointmentDates(2, Date.Monday, '06.30 pm', '07.00 pm'),
];
