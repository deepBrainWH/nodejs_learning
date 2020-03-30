class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`my name is ${this.name} and I am ${this.age}`);
  }
}

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `hello every doctors, my name is ${this.name} and I am ${this.age}`
    );
  }
}
module.exports = Person;
module.exports = Student;
