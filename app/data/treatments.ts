import ITreatmentType from '../domain/models/ITreatment';
import {Treatment} from '../domain/enums/Enum';

export const Treatments: ITreatmentType[] = [
  {
    type: Treatment.Cleaning,
    price: 500,
  },
  {
    type: Treatment.Whitening,
    price: 1000,
  },
  {
    type: Treatment.Filling,
    price: 800,
  },
  {
    type: Treatment.Nerve_Filling,
    price: 1200,
  },
  {
    type: Treatment.Root_Canal_Therapy,
    price: 1500,
  },
];
