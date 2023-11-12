import {Physician} from '../domain/entities';
import {CollectionTypes} from '../domain/enums/Enum';
import IPhysician from '../domain/models/IPhysician';
import Store from '../globalStore/Store';

// get all physicians
export const getAllPhysicians = (): IPhysician[] => {
  const store = new Store<IPhysician>();
  return store.getList<IPhysician>(CollectionTypes.Physician);
};
