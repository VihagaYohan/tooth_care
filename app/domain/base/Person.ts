export default abstract class Person {
  constructor(public firstName: string, public lastName: string) {}

  abstract getFullName(): string;
}
