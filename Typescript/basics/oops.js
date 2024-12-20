/*
Classes: Create object templates.
Access Modifiers: Control property/method visibility.
Inheritance: Extend functionality using extends.
Polymorphism: Override methods.
Abstraction: Use abstract classes or interfaces.
Static Members: Belong to the class rather than instances.
Getters/Setters: Control property access.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.welcome = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Student;
}());
var dk = new Student("Dinesh", 30);
dk.welcome(); // Output: Hello, my name is John and I am 30 years old.
//encapsulation
// public: Accessible anywhere (default).
// private: Accessible only within the class.
// protected: Accessible within the class and its subclasses.
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var employee = new Employee("Alice", 25, 50000);
console.log(employee.name); // Output: Alice
console.log(employee.getSalary()); // Output: 50000
// console.log(employee.salary); // Error: Property 'salary' is private
//inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Generic animal sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this; // Calls the parent class constructor
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark!");
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy");
dog.makeSound(); // Output: Bark!
//polymorphism
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        return 0; // Default implementation
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(function (shape) { return console.log(shape.area()); });
// Output: 78.53981633974483 (Circle area)
// Output: 24 (Rectangle area)
//abstraction
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.start = function () {
        console.log("Starting the vehicle...");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.move = function () {
        console.log("Car is driving...");
    };
    return Car;
}(Vehicle));
var car = new Car();
car.start(); // Output: Starting the vehicle...
car.move(); // Output: Car is driving...
var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.fly = function () {
        console.log("The airplane is flying...");
    };
    return Airplane;
}());
var airplane = new Airplane();
airplane.fly(); // Output: The airplane is flying...
//static
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.calculateCircumference = function (radius) {
        return 2 * MathUtils.PI * radius;
    };
    MathUtils.PI = 3.14159;
    return MathUtils;
}());
console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateCircumference(10)); // Output: 62.8318
//getters and setters
var AgeValidation = /** @class */ (function () {
    function AgeValidation(age) {
        this._age = age;
    }
    Object.defineProperty(AgeValidation.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Age cannot be negative");
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return AgeValidation;
}());
var valid = new AgeValidation(25);
console.log(valid.age); // Output: 25
valid.age = 30;
console.log(valid.age); // Output: 30
// valid.age = -5; // Throws Error: Age cannot be negative
