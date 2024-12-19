let count = 0;
console.log(typeof count);
console.log(count);

//types
let age: number = 34;
let fName: string = "Dineshkumar";
let isMarried: boolean = true;

//special types
let arr: number[] = [1, 2, 3];
let data: any = 45;
data = true;

let input: unknown = "Hello";
if (typeof input === "string") {
  input = "Hi";
}

//tuple-mutable
let tuple: [number, string, boolean] = [1, "2", false];
tuple[0] = 25;

//tuple immutable
let tupleIm: readonly [number] = [10];

//interface
interface Person {
  id: number;
  name: string;
  age: number;
}

let dk: Person = {
  id: 1,
  name: "Dinesh",
  age: 34,
};

//type - union
type id = string | number;
let userId: id = "123";

//type - intersection
type user = { name: string } & { age: number };
let userDetail: user = {
  name: "Dinesh",
  age: 34,
};

//functions
function add2(a: number, b: number): number {
  return a + b;
}

function add3(a: number, b: number, c?: number): number {
  return c ? a + b + c : a + b;
}

add3(10, 20, 30);
add3(10, 20);

const sum = (a: number, b: number): number => {
  return a + b;
};

//default
function add4(a: number, b: number, c: number = 10): number {
  return a + b + c;
}
//rest operator
function add5(
  a: number,
  b: number,
  c: number = 10,
  ...numbers: number[]
): number {
  return numbers.reduce((acc, num) => acc + num, a + b + c);
}

add5(10, 20);
