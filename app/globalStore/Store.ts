// interface
import ITreatmentType from '../domain/models/ITreatment';
import IPhysician from '../domain/models/IPhysician';
import {CollectionTypes} from '../domain/enums/Enum';

// pre-defined data
import {Treatments as TreatmentTypes} from '../data/treatments';
import {Physicians} from '../data/physicians';
import {Patients} from '../data/patients';
import Appointments from '../data/appointments';

// models
import {Patient, Physician, TreatmentType} from '../domain/entities';
import Appointment from '../domain/entities/Appointments';

export default class Store<T> {
  private _treatmentTypesList: TreatmentType[] = TreatmentTypes;
  private _physiciansList: IPhysician[] = Physicians;
  private _patientList: Patient[] = Patients;
  private _appointmentsList: Appointment[] = Appointments;

  // add items to collection
  addItemToCollection(item: T) {
    if (item instanceof TreatmentType) {
      this._treatmentTypesList.push(item);
    } else if (item instanceof Physician) {
      this._physiciansList.push(item);
    } else if (item instanceof Appointment) {
      this._appointmentsList.push(item);
    } else if (item instanceof Patient) {
      this._patientList.push(item);
    }
  }

  // remove items from collection
  removeItems(item: T) {
    if (item instanceof TreatmentType) {
    } else if (item instanceof Physician) {
    }
  }

  // update an item from collection
  updateItem(id: number, item: T) {
    if (item instanceof TreatmentType) {
    } else if (item instanceof Physician) {
    } else if (item instanceof Appointment) {
      let index = this._appointmentsList.findIndex(
        (element, index) => element.appointmentId === id,
      );
      this._appointmentsList[index] = item;
    }
  }

  // return items in collection
  getList<T>(collection: CollectionTypes): T[] {
    let result: any[] = [];
    if (collection === CollectionTypes.Physician) {
      result = this._physiciansList;
    } else if (collection === CollectionTypes.TreatmentTypes) {
      result = this._treatmentTypesList;
    } else if (collection === CollectionTypes.Patient) {
      result = this._patientList;
    } else if (collection === CollectionTypes.Appointments) {
      result = this._appointmentsList;
    }
    return result;
  }

  // return item based on Id
  getItem<T>(collection: CollectionTypes, id: number) {
    if (collection === CollectionTypes.Physician) {
    } else if (collection === CollectionTypes.TreatmentTypes) {
    } else if (collection === CollectionTypes.Patient) {
    } else if (collection === CollectionTypes.Appointments) {
      let item = this._appointmentsList.filter(
        (item: Appointment) => item.appointmentId === id,
      );
      return item;
    }
  }

  // filter records by date
  filterRecord<T>(collection: CollectionTypes, date: string) {
    if (collection === CollectionTypes.Physician) {
    } else if (collection === CollectionTypes.TreatmentTypes) {
    } else if (collection === CollectionTypes.Patient) {
    } else if (collection === CollectionTypes.Appointments) {
      let item = this._appointmentsList.filter(
        (item: Appointment) => item.appointmentDate.title === date,
      );
      return item;
    }
  }
}
