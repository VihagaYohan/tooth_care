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
import {Patient, Physician, TreatmentType, app} from '../domain/entities';
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
  updateItem(item: T) {
    if (item instanceof TreatmentType) {
    } else if (item instanceof Physician) {
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
}
