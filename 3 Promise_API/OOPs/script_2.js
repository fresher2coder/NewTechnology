//method chaining, abstract classes, multiple inheritance-mixins, method overloading
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setName(name) {
    this.name = name;
    return this; // Enables chaining
  }

  setAge(age) {
    this.age = age;
    return this; // Enables chaining
  }

  greet() {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
    return this; // Enables chaining
  }
}

const john = new Person("John", 30);
john.setName("Jonathan").setAge(35).greet();
// Hi, my name is Jonathan, and I am 35 years old.

class Shape {
  constructor(name) {
    if (this.constructor === Shape) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.name = name;
  }

  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }
}

//abstract class
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78.53981633974483

const Drivable = {
  drive() {
    console.log(`${this.name} is driving.`);
  },
};

const Flyable = {
  fly() {
    console.log(`${this.name} is flying.`);
  },
};

//multiple inheritance
class Vehicle {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Vehicle.prototype, Drivable, Flyable);

const car = new Vehicle("Car");
car.drive(); // Car is driving.

const plane = new Vehicle("Plane");
plane.fly(); // Plane is flying.

//method overloading
class Calculator {
  add(a, b = 0, c = 0) {
    return a + b + c;
  }

  addition(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

const calc = new Calculator();
console.log(calc.add(1)); // 1 (1 + 0 + 0)
console.log(calc.add(1, 2)); // 3 (1 + 2 + 0)
console.log(calc.add(1, 2, 3)); // 6 (1 + 2 + 3)

console.log(calc.addition(1)); // 1
console.log(calc.addition(1, 2)); // 3
console.log(calc.addition(1, 2, 3, 4)); // 10
