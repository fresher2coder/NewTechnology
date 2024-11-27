let array = [1, 2, 5, 5, 6, 5, 8, 7, 5, 8];

//filter, indexOf

let uniqueArray = array.filter((num, i) => i != array.indexOf(num));

console.log(uniqueArray);
