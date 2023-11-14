import Appointment from '../domain/entities/Appointments';
import {CollectionTypes} from '../domain/enums/Enum';
import Store from '../globalStore/Store';

// get all appointments
export const getAllAppointments = () => {
  let store = new Store<Appointment>();
  return store.getList<Appointment>(CollectionTypes.Appointments);
};

// add new appointment
export const addAppointment = (item: Appointment) => {
  let store = new Store<Appointment>();
  store.addItemToCollection(item);

  let result = store.getList<Appointment>(CollectionTypes.Appointments);
  console.log(result.length);
};
