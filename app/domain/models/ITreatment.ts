import {Treatment} from '../enums/Enum';

export default interface ITreatmentType {
  id: number;
  type: Treatment;
  price: number;
}
