//callback
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

let welcomeMsg1 = function () {
  console.log("Welcome to NeoTechnology, Hyderabad");
};
function welcomeMsg2() {
  console.log("Welcome to NeoTechnology, Vizag");
}

//greet("Dineshkumar", welcomeMsg1);
//greet("Divya Dineshkumar", welcomeMsg2);

//Hello Dineshkumar
//Welcome to NeoTechonology

//higher order

function operate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

operate(10, 20, add);
