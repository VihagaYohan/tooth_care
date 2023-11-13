import {Gender} from '../enums/Enum';
import IPerson from '../models/IPerson';

export default class Person implements IPerson {
  title: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  fullName: string;

  constructor(
    title: string,
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
  ) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.fullName = `${this.title}. ${this.firstName} ${this.lastName}`;
  }

  public getFullName() {
    return this.fullName;
  }

  public getAge() {
    return this.age;
  }
}
