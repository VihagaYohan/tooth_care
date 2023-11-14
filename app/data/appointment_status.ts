import {AppointmentStatus} from '../domain/enums/Enum';

const AppointmentStatusList = [
  {
    id: 1,
    status: AppointmentStatus.Pending,
  },
  {
    id: 2,
    status: AppointmentStatus.Confirmed,
  },
  {
    id: 3,
    status: AppointmentStatus.Cancelled,
  },
  {
    id: 4,
    status: AppointmentStatus.Completed,
  },
];

export default AppointmentStatusList;
