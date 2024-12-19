var count = 0;
console.log(typeof count);
console.log(count);
//types
var age = 34;
var fName = "Dineshkumar";
var isMarried = true;
//special types
var arr = [1, 2, 3];
var data = 45;
data = true;
var input = "Hello";
if (typeof input === "string") {
    input = "Hi";
}
//tuple-mutable
var tuple = [1, "2", false];
tuple[0] = 25;
//tuple immutable
var tupleIm = [10];
var dk = {
    id: 1,
    name: "Dinesh",
    age: 34,
};
var userId = "123";
var userDetail = {
    name: "Dinesh",
    age: 34,
};
//functions
function add2(a, b) {
    return a + b;
}
function add3(a, b, c) {
    return c ? a + b + c : a + b;
}
add3(10, 20, 30);
add3(10, 20);
var sum = function (a, b) {
    return a + b;
};
//default
function add4(a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
}
//rest operator
function add5(a, b, c) {
    if (c === void 0) { c = 10; }
    var numbers = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        numbers[_i - 3] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, a + b + c);
}
add5(10, 20);
