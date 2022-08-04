const username: string | number = 'ascend';

const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {
  private age: number;
  private lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const nico = new Person(15, 'Molina');

