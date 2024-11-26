// Creating an Array
// Using array literal
let fruits = ["apple", "banana", "cherry"];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Accessing Elements
console.log(fruits[0]); // "apple" - First element of the fruits array
console.log(numbers[2]); // 3 - Third element of the numbers array

// Modifying Elements
fruits[1] = "blueberry"; // Changes "banana" to "blueberry"
console.log(fruits); // ["apple", "blueberry", "cherry"]

// Array Length
console.log(fruits.length); // 3 - Number of elements in the fruits array

// Common Methods

// push() - Adds one or more elements to the end of an array
fruits.push("date");
console.log(fruits); // ["apple", "blueberry", "cherry", "date"]

// pop() - Removes the last element from an array
fruits.pop();
console.log(fruits); // ["apple", "blueberry", "cherry"]

// shift() - Removes the first element from an array
fruits.shift();
console.log(fruits); // ["blueberry", "cherry"]

// unshift() - Adds one or more elements to the beginning of an array
fruits.unshift("avocado");
console.log(fruits); // ["avocado", "blueberry", "cherry"]

// splice() - Adds or removes elements from any position in an array
fruits.splice(1, 1, "blackberry", "coconut");
console.log(fruits); // ["avocado", "blackberry", "coconut", "cherry"]

// slice() - Returns a shallow copy of a portion of an array into a new array
let newFruits = fruits.slice(1, 3);
console.log(newFruits); // ["blackberry", "coconut"]

// forEach() - Executes a provided function once for each array element
fruits.forEach((fruit) => console.log(fruit));
// Output:
// avocado
// blackberry
// coconut
// cherry

// map() - Creates a new array with the results of calling a provided function on every element
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // ["AVOCADO", "BLACKBERRY", "COCONUT", "CHERRY"]

// filter() - Creates a new array with all elements that pass the test implemented by the provided function
let shortFruits = fruits.filter((fruit) => fruit.length < 8);
console.log(shortFruits); // ["avocado", "coconut", "cherry"]

// reduce() - Applies a function against an accumulator and each element in the array to reduce it to a single value
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // 22 - Length of all fruit names combined

// Iterating Over Arrays

// For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// For...in loop (less common for arrays, better suited for objects)
for (let index in fruits) {
  console.log(fruits[index]);
}
