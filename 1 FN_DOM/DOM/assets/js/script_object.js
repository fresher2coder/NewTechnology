//CREATING OBJECTS
// 1. object literals

const dk = {
  firstName: "Dineshkumar",
  lastName: "Thangavel",
  age: 33,
  isStudent: false,
  hobbies: ["reading", "swimming", "coding"],
  address: {
    doorNo: 6,
    street: "dinesh street",
    city: "chennai",
    pincode: 600059,
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// 2. object constructor - new

const dd = new Object();
dd.firstName = "Divya";
dd.lastName = "Dineshkumar";
dd.age = 30;
dd.isStudent = false;
dd.hobbies = ["reading", "swimming", "coding"];
dd.address = {
  doorNo: 6,
  street: "dinesh street",
  city: "chennai",
  pincode: 600059,
};
dd.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// 3. class constructor

class Person {
  constructor(firstName, lastName, age, isStudent, hobbies, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isStudent = isStudent;
    this.hobbies = hobbies;
    this.address = address;    
  }

  fullName() {
    return this.firstName + " " + this.lastName
  }
}

const ddd = new Person(
  "Darwin",
  "Divya DInesh",
  2,
  true,
  ["Distrubing the Father", "Distrubing the Mother"],
  {
    doorNo: 6,
    street: "dinesh street",
    city: "chennai",
    pincode: 600059,
  }
);


//ACCESSING - Dot Notation, Bracket Notation
console.log(dk)
console.log(dk.fullName())
console.log(dk["fullName"]())

console.log(dd)
console.log(dd.fullName())
console.log(dd["fullName"]())

console.log(ddd)
console.log(ddd.fullName())
console.log(ddd["fullName"]())


//MODIFYING
dk.isStudent = true
console.log(dk.isStudent)

//ADDING PROPERTIES
dk.salary = 10000.0
console.log(dk)

//DELETING PROPERTIES
delete dk.salary


//ITERATE
//using 'for .. in' - iterate over the keys and use bracket notation
for(let key in dk){
    console.log(key, ": ", dk[key])
}

//using 'for .. of' - iterate over the values
for(let value of Object.values(dk)){
    console.log(value)
}

//Returns a 1D array of keys of an object
console.log(Object.keys(dk))

//Returns a 1D array of values of an object
console.log(Object.values(dk))

//Returns a nested array of (key, value) pair
console.log(Object.entries(dk))

// Copies the values of all enumerable own properties from one or more source objects to a target object.
// Returns the target object.
const family = Object.assign({}, dk)

// Freezes an object: other code cannot delete or change any properties.
// Object.freeze(family)
family.firstName = "aaaa"
console.log(family)
console.log(dk)


//Find the length of an Object
console.log(Object.values(dk).length)




