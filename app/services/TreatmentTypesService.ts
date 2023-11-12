import {TreatmentType} from '../domain/entities';
import {CollectionTypes} from '../domain/enums/Enum';
import Store from '../globalStore/Store';

// get all treatment types
export const getAllTreatmentTypes = (): TreatmentType[] => {
  const store = new Store<TreatmentType>();
  return store.getList<TreatmentType>(CollectionTypes.TreatmentTypes);
};
