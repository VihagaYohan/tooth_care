import IPerson from '../models/IPerson';

export default class Person implements IPerson {
  title: string;
  firstName: string;
  lastName: string;
  age: number;

  constructor(title: string, firstName: string, lastName: string, age: number) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.title}. ${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }
}
