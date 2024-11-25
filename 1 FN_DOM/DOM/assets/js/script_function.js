// Function Declaration
// Function declarations are hoisted, meaning they can be called before they are defined
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice")); // "Hello, Alice!"
  
  // Function Expression
  // Function expressions are not hoisted and can only be called after they are defined
  const square = function(num) {
    return num * num;
  };
  console.log(square(4)); // 16
  
  // Arrow Function
  // Arrow functions are a concise way to write function expressions and do not have their own 'this' context
  const add = (a, b) => a + b;
  console.log(add(5, 3)); // 8
  
  // Single Parameter Arrow Function
  // If there is only one parameter, parentheses can be omitted
  const double = x => x * 2;
  console.log(double(7)); // 14
  
  // Function with Default Parameters
  // Default parameters allow you to set default values for parameters
  function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5)); // 5 (b is defaulted to 1)
  console.log(multiply(5, 2)); // 10
  
  // Rest Parameters
  // Rest parameters allow a function to accept an indefinite number of arguments as an array
  function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  console.log(sum(1, 2, 3, 4)); // 10
  
  // Function with Early Return
  // Using early return to exit a function early if a condition is met
  function checkAge(age) {
    if (age < 18) {
      return "You are underage.";
    }
    return "You are an adult.";
  }
  console.log(checkAge(16)); // "You are underage."
  console.log(checkAge(21)); // "You are an adult."
  
  // Immediately Invoked Function Expression (IIFE)
  // An IIFE is a function that runs as soon as it is defined
  (function() {
    console.log("This function runs immediately!");
  })();
  
  // Function Scope
  // Functions have their own scope, so variables declared inside a function are not accessible outside
  function scopeExample() {
    let localVar = "I am local";
    console.log(localVar); // "I am local"
  }
  scopeExample();
  // console.log(localVar); // ReferenceError: localVar is not defined
  
  // Closures
  // A closure is a function that retains access to its lexical scope even when the function is executed outside that scope
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  
  // Higher-Order Functions
  // Higher-order functions are functions that take other functions as arguments or return functions
  function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  const result = applyOperation(5, 3, (x, y) => x - y);
  console.log(result); // 2
  
  // Function Methods
  // Functions have properties and methods like 'call', 'apply', and 'bind'
  
  // call() - Calls a function with a given 'this' value and arguments
  function introduce(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
  }
  const person = { name: "Alice" };
  console.log(introduce.call(person, "Hello", "!")); // "Hello, Alice!"
  
  // apply() - Similar to 'call', but arguments are passed as an array
  console.log(introduce.apply(person, ["Hi", "?"])); // "Hi, Alice?"
  
  // bind() - Creates a new function with a given 'this' value and initial arguments
  const introduceAlice = introduce.bind(person, "Hey");
  console.log(introduceAlice("?")); // "Hey, Alice?"
  
  // Function Constructor
  // Functions can also be created using the Function constructor
  const sumConstructor = new Function("a", "b", "return a + b;");
  console.log(sumConstructor(10, 5)); // 15
  