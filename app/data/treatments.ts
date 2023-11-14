import ITreatmentType from '../domain/models/ITreatment';
import {Treatment} from '../domain/enums/Enum';

export const Treatments: ITreatmentType[] = [
  {
    id: 1,
    type: Treatment.Cleaning,
    price: 500,
  },
  {
    id: 2,
    type: Treatment.Whitening,
    price: 1000,
  },
  {
    id: 3,
    type: Treatment.Filling,
    price: 800,
  },
  {
    id: 4,
    type: Treatment.Nerve_Filling,
    price: 1200,
  },
  {
    id: 5,
    type: Treatment.Root_Canal_Therapy,
    price: 1500,
  },
];
