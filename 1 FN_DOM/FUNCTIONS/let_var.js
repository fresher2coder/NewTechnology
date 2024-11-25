function testVar() {
  console.log(x); // Undefined (var is hoisted but not initialized)
  var x = 10; // Declaration and initialization
  console.log(x); // 10
}

function testLet() {
  // console.log(y); // Error: Cannot access 'y' before initialization (let is not hoisted like var)
  let y = 20; // Declaration and initialization
  console.log(y); // 20
}

function blockScopeDifference() {
  if (true) {
    var a = "I am var";
    let b = "I am let";
  }
  console.log(a); // "I am var" (var is function-scoped, accessible outside the block)
  // console.log(b); // Error: b is not defined (let is block-scoped)
}

// Run functions
testVar();
testLet();
blockScopeDifference();
