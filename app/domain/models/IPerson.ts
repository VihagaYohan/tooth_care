import {Gender} from '../enums/Enum';

export default interface IPerson {
  title: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  gender: Gender;
  getFullName: () => string;
  getAge: () => number;
}
