import {Treatment} from '../enums/Enum';
import ITreatmentType from '../models/ITreatment';

export default class TreatmentType implements ITreatmentType {
  constructor(public type: Treatment, public price: number) {}
}
