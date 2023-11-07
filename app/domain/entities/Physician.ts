import {Person} from '../base/index';

export default class Patient extends Person {
  getFullName(): string {
    throw new Error('Method not implemented.');
  }
}
