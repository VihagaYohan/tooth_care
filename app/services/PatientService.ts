import {Patient} from '../domain/entities';
import {CollectionTypes} from '../domain/enums/Enum';
import Store from '../globalStore/Store';

// get all patients
export const getAllPatients = () => {
  let store = new Store<Patient>();
  return store.getList(CollectionTypes.Patient);
};

// add new patient
export const addNewPatient = (item: Patient) => {
  let store = new Store<Patient>();
  store.addItemToCollection(item);
};
