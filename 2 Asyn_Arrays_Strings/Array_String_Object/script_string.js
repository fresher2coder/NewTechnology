// Creating Strings
let singleQuoteString = 'Hello, world!'; // Using single quotes
let doubleQuoteString = "Hello, world!"; // Using double quotes
let templateLiteralString = `Hello, world!`; // Using template literals (backticks)

// Accessing Characters
console.log(singleQuoteString[0]); // "H" - First character
console.log(doubleQuoteString.charAt(1)); // "e" - Character at index 1

// String Length
console.log(singleQuoteString.length); // 13 - Length of the string

// Concatenation
let greeting = "Hello";
let name = "Alice";
let message = greeting + ", " + name + "!"; // Using + operator
console.log(message); // "Hello, Alice!"

// Template Literals
let templateMessage = `${greeting}, ${name}!`; // Using template literals
console.log(templateMessage); // "Hello, Alice!"

// String Methods

// toUpperCase() - Converts all characters to uppercase
let upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage); // "HELLO, ALICE!"

// toLowerCase() - Converts all characters to lowercase
let lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage); // "hello, alice!"

// trim() - Removes whitespace from both ends of the string
let paddedString = "   whitespace   ";
let trimmedString = paddedString.trim();
console.log(trimmedString); // "whitespace"

// includes() - Checks if a string contains a specified substring
console.log(message.includes("Alice")); // true
console.log(message.includes("Bob")); // false

// indexOf() - Returns the index of the first occurrence of a substring
console.log(message.indexOf("Alice")); // 7
console.log(message.indexOf("Bob")); // -1 (not found)

// lastIndexOf() - Returns the index of the last occurrence of a substring
let repeatString = "hello hello";
console.log(repeatString.lastIndexOf("hello")); // 6

// substring() - Extracts characters between two indices
let subString = message.substring(0, 5);
console.log(subString); // "Hello"

// slice() - Similar to substring() but can accept negative indices
let sliceString = message.slice(7, 12);
console.log(sliceString); // "Alice"

// replace() - Replaces the first occurrence of a substring with another substring
let replacedString = message.replace("Alice", "Bob");
console.log(replacedString); // "Hello, Bob!"

// split() - Splits a string into an array of substrings based on a separator
let words = message.split(", ");
console.log(words); // ["Hello", "Alice!"]

// repeat() - Repeats a string a specified number of times
let repeatedString = greeting.repeat(3);
console.log(repeatedString); // "HelloHelloHello"

// String Interpolation with Template Literals
let age = 25;
let introduction = `I am ${name} and I am ${age} years old.`;
console.log(introduction); // "I am Alice and I am 25 years old."

// Escaping Characters in Template Literals
let escapedString = `This is a backslash: \\ and this is a dollar sign: \$`;
console.log(escapedString); // "This is a backslash: \ and this is a dollar sign: $"
