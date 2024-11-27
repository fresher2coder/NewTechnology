//class, object, constructor, private field,static methods, getters and setters, method overriding, inheritance, default parameters

class Person {
  constructor(name, age, country = "India", ...exp) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.exp = exp;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    console.log(this.country, this.exp);
  }
}

class Employee extends Person {
  #id;
  constructor(name, age, jobRole) {
    super(name, age);
    this.#id = Math.floor(Math.random() * 100);
    this.jobRole = jobRole;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  static isValidAge(age) {
    if (typeof age === "string" || age == 0) return false;
    return true;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    console.log(`I am working as a ${this.jobRole}`);
  }

  toString() {
    console.log(`Employee: ${this.name} ${this.jobRole}`);
  }
}

const dk = new Person("Dineshkumar", 34, "INDIA", 1, 2, 3);
dk.greet();

const dkEmp = new Employee(dk.name, dk.age, "Trainer");
console.log(dkEmp.id);
dkEmp.id = 1001;
console.log(dkEmp.id);

console.log("age: ", Employee.isValidAge(0));
dkEmp.greet();

dkEmp.toString();
