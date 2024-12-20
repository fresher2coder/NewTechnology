/* 
Classes: Create object templates.
Access Modifiers: Control property/method visibility.
Inheritance: Extend functionality using extends.
Polymorphism: Override methods.
Abstraction: Use abstract classes or interfaces.
Static Members: Belong to the class rather than instances.
Getters/Setters: Control property access.
*/

//class
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  welcome() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const dk = new Student("Dinesh", 30);
dk.welcome(); // Output: Hello, my name is John and I am 30 years old.

//encapsulation
// public: Accessible anywhere (default).
// private: Accessible only within the class.
// protected: Accessible within the class and its subclasses.
class Employee {
  private salary: number; // Not accessible outside this class

  constructor(public name: string, private age: number, salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const employee = new Employee("Alice", 25, 50000);
console.log(employee.name); // Output: Alice
console.log(employee.getSalary()); // Output: 50000
// console.log(employee.salary); // Error: Property 'salary' is private

//inheritance
class Animal {
  constructor(public name: string) {}

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // Calls the parent class constructor
  }

  makeSound() {
    console.log("Bark!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Bark!

//polymorphism
class Shape {
  area(): number {
    return 0; // Default implementation
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => console.log(shape.area()));
// Output: 78.53981633974483 (Circle area)
// Output: 24 (Rectangle area)

//abstraction
abstract class Vehicle {
  abstract move(): void; // Abstract method must be implemented in derived classes

  start() {
    console.log("Starting the vehicle...");
  }
}

class Car extends Vehicle {
  move() {
    console.log("Car is driving...");
  }
}

const car = new Car();
car.start(); // Output: Starting the vehicle...
car.move(); // Output: Car is driving...

//interfaces
interface Flyable {
  fly(): void;
}

class Airplane implements Flyable {
  fly() {
    console.log("The airplane is flying...");
  }
}

const airplane = new Airplane();
airplane.fly(); // Output: The airplane is flying...

//static
class MathUtils {
  static PI = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateCircumference(10)); // Output: 62.8318

//getters and setters
class AgeValidation {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) throw new Error("Age cannot be negative");
    this._age = value;
  }
}

const valid = new AgeValidation(25);
console.log(valid.age); // Output: 25
valid.age = 30;
console.log(valid.age); // Output: 30
// valid.age = -5; // Throws Error: Age cannot be negative
