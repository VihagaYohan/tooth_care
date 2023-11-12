export default interface IPerson {
  title: string;
  firstName: string;
  lastName: string;
  age: number;
  getFullName: () => string;
  getAge: () => number;
}
