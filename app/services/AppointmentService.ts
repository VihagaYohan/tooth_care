import Appointment from '../domain/entities/Appointments';
import {CollectionTypes} from '../domain/enums/Enum';
import Store from '../globalStore/Store';

// get all appointments
export const getAllAppointments = () => {
  let store = new Store<Appointment>();
  return store.getList<Appointment>(CollectionTypes.Appointments);
};

// add new appointment
export const addAppointment = (newItem: Appointment): boolean => {
  let store = new Store<Appointment>();
  // check if doctor already have an appointment for selected time slot
  let allAppointments = store.getList(CollectionTypes.Appointments);
  let exsitingAppointment = allAppointments.filter((item: any, index) => {
    return (
      item.doctor.id === newItem.doctor.id &&
      item.appointmentDate.startTime === newItem.appointmentDate.startTime
    );
  });

  if (exsitingAppointment.length > 0) {
    store.addItemToCollection(newItem);
    return true;
  } else {
    return false;
  }
};

// update appointment
export const updateAppointment = (id: number, appointment: Appointment) => {
  let store = new Store<Appointment>();
  store.updateItem(id, appointment);
};
