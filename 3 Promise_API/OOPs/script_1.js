//class, object, constructor, private field,static methods, getters and setters, method overriding, inheritance, default parameters

class Person {
  // Private fields
  #id;

  constructor(name, age, id = null) {
    this.name = name;
    this.age = age;
    this.#id = id || Math.floor(Math.random() * 10000); // Generate random ID if not provided
  }

  // Getter for ID (read-only)
  get id() {
    return this.#id;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("Invalid name");
    }
    this._name = value;
  }

  // Static method for validation
  static isValidAge(age) {
    return Number.isInteger(age) && age > 0;
  }

  // Instance method
  greet() {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
  }

  // Polymorphic behavior
  toString() {
    return `Person: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
  }
}

// Subclass to demonstrate inheritance
class Employee extends Person {
  constructor(name, age, id, jobTitle) {
    super(name, age, id); // Call the parent constructor
    this.jobTitle = jobTitle;
  }

  // Overriding the greet method
  greet() {
    console.log(
      `Hi, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`
    );
  }

  // Additional method
  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

// Example usage
try {
  const john = new Person("John", 30);
  console.log(john.toString()); // Person: John, Age: 30, ID: <random ID>
  john.greet(); // Hi, my name is John, and I am 30 years old.

  const jane = new Employee("Jane", 28, null, "Software Engineer");
  jane.greet(); // Hi, my name is Jane, I am 28 years old, and I work as a Software Engineer.
  jane.work(); // Jane is working as a Software Engineer.

  console.log(Person.isValidAge(25)); // true
  console.log(Person.isValidAge(-5)); // false

  // Accessing private fields via getters
  console.log(john.id); // Randomly generated ID
} catch (error) {
  console.error(error.message);
}
