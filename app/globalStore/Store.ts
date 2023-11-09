// interface
import ITreatmentType from '../domain/models/ITreatment';
import IPhysician from '../domain/models/IPhysician';
import {CollectionTypes} from '../domain/enums/Enum';

// pre-defined data
import {Treatments as TreatmentTypes} from '../data/treatments';
import {Physicians} from '../data/physicians';

// models
import {Patient, Physician, TreatmentType} from '../domain/entities';

export default class Store<T> {
  private _treatmentTypesList: TreatmentType[] = TreatmentTypes;
  private _physiciansList: IPhysician[] = Physicians;
  private _patientList: T[] = [];

  // add items to collection
  addItemToCollection(item: T) {
    if (item instanceof TreatmentType) {
      this._treatmentTypesList.push(item);
    } else if (item instanceof Physician) {
      this._physiciansList.push(item);
    }
  }

  // remove items from collection
  removeItems(item: T) {
    if (item instanceof TreatmentType) {
    } else if (item instanceof Physician) {
    }
  }

  // update an item from collection
  updateItem(item: T) {
    if (item instanceof TreatmentType) {
    } else if (item instanceof Physician) {
    }
  }

  // return items in collection
  getList(
    collection: CollectionTypes,
  ): TreatmentType[] | IPhysician[] | undefined {
    if (collection === CollectionTypes.Physician) {
      return this._physiciansList;
    } else if (collection === CollectionTypes.TreatmentTypes) {
      return this._treatmentTypesList;
    }
  }
}
