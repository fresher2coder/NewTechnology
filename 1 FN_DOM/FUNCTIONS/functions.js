//named function
function calculateDiscount(price, discount) {
  return price - (price * discount) / 100;
}

// Real-time usage
const originalPrice = 500;
const discount = 10; // 10%
console.log("Final Price:", calculateDiscount(originalPrice, discount));
// Output: Final Price: 450

//function expression

const isEven = function (num) {
  return num % 2 === 0;
};

// Real-time usage
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

//arrow function
//example-1
let greet = () => {
  return "Welcome to NeoTechnology";
};
greet();

//example-2
let square = (a) => a * a;
console.log(square(10));

//example-3
let addition = (a, b) => {
  return a + b;
};

console.log(addition(10, 20));

//example-4
let diff = (a, b) => a - b;

console.log(diff(10, 20));

//example-5
let person = { name: "Dineshkumar", age: 33 };
let emp = (person) => ({ ...person, empID: 101 });

console.log(emp(person));

//callback function
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Executing the callback function
}

function showWelcomeMessage() {
  console.log("Welcome to our website!");
}

// Real-time usage
greetUser("Alice", showWelcomeMessage);

//higher order function
function operate(a, b, operation) {
  return operation(a, b); // Executes the passed function
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

// Real-time usage
console.log("Addition:", operate(5, 3, add)); // Output: Addition: 8
console.log("Multiplication:", operate(5, 3, multiply)); // Output: Multiplication: 15
