console.log("External: ", "Hello Javascript!");

let a = 10;
console.log("DataType of a: ", typeof a);

a = "D";
console.log("DataType of a: ", typeof a);

//var let const

let b = 10;
const pi = 22 / 7;

// Number
let num = 100;
// String
let greetings = "Welcome";
// Boolean
let isActive = true;
// Null
let nothing = null;
// Undefined
let notAssigned;
// Symbol
let uniqueId = Symbol("id");
// BigInt
let bigNum =
  123456789123456789123456789123456789123456789123456789123456789123456789n;
//Array
let colors = ["Red", "Blue", "Green"];

// Object
let user = {
  name: "Dineshkumar",
  age: 33,
  isMarried: true,
  experience: {
    com1: "abc",
    com2: "xyz",
  },
};
//function

console.log("DataType of bigNum: ", typeof bigNum);

// Arithmetic
// Assignment
// Relational
// Logical
// Bitwise

let num1 = 10;
let num2 = 20;
console.log("Sum: ", num1 + num2);

// 1. Find the unit of a given Number
num = 12345;
console.log("Last Digit: ", num % 10);

// 2. Find the nth digit of a given number
k = 3;
console.log("3th digit of 12345: ", Math.floor(num / Math.pow(10, k - 1)) % 10);

// 3. Find number of odd and even numbers bw the range 0 to n
console.log("Number of Even Numbers: ", Math.floor(num / 2));
console.log("Number of Odd Numbers: ", num - Math.floor(num / 2));

//4. Write a program to assign read or write or both or neither access to user using bitwise
let write = 1; // 0001
let read = 2; //  0010
let restrict = 0;
let userPermission = write | read;

if (userPermission == write) console.log("Write Access");
else if (userPermission == read) console.log("Read Access");
else if (userPermission != 0) console.log("Both Access");
else console.log("No Access");

//if-else
//Find the max
let max;
num1 = 10;
num2 = 20;
let num3 = 30;

max = num1;

if (num2 > max) max = num2;

if (num3 > max) max = num3;

console.log("Largest Number: ", max);

let nums = [10, 20, 20, 50, 80, 90];

max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) max = nums[i];
}

console.log("Array Max: ", max);

//of-index
console.log("of - for loop: Indices");
for (let key in nums) {
  console.log(key);
}

console.log("in - for loop: Values");
//in-value
for (let value of nums) {
  console.log(value);
}

//switch case
let day = 1;
let dayName;

switch ((day - 1) % 7) {
  case 0:
    dayName = "Monday";
  case 2:
    dayName = "Wednesday";
  case 4:
    dayName = "Friday";
  case 6:
    dayName = "Sunday";
    break;

  case 1:
    dayName = "Tuesday";
  case 3:
    dayName = "Thursday";
  case 5:
    dayName = "Saturday";
    break;

  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday

//break-stop, continue-skip

// 1. Print all the numbers from l to u except perfect squares

let l = 1;
let u = 20;

console.log("Continue Keyword: Skipped perfect squares");
for (let i = l; i <= u; i++) {
  if (Math.pow(Math.floor(Math.sqrt(i)), 2) == i) continue;

  console.log(i);
}

// 2. Print all the numbers from l to u till perfect cube
l = 2;
u = 10;
console.log("Break Keyword(Iteration Stopped): Till perfect cube");
for (let i = l; i <= u; i++) {
  console.log(i);

  if (Math.pow(Math.floor(Math.cbrt(i)), 3) == i) break;
}
