let a = 0;

setTimeout(() => {
  let timer = setInterval(() => {
    console.log(++a);
    if (a == 5) {
      clearInterval(timer);
    }
  }, 1000);
}, 5000);

//high, oops, dynamicall typed, single-thread, non-blocking, asyn

// console.log("start");

// setTimeout(() => {
//   console.log("1000");
// }, 0);
// setTimeout(() => {
//   console.log("3000");
// }, 3000);
// setTimeout(() => {
//   console.log("5000");
// }, 5000);

// console.log("end");
