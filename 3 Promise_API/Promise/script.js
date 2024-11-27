//Simple Example
const promise_1 = new Promise((resolve, reject)=>{

  let love = false
  if(love)
    setTimeout(resolve, 5000, "Heart")
  else
    reject("Broken Heart")
})

let promise_2 = ()=>{
  return new Promise((resolve, reject)=>{

    let coin = false
    if(coin)
      resolve("Head")
    else
      reject("Tail")
  })
}

promise_1
.then((data)=>{console.log(data, ", Getting Married")})
.catch((data)=>{console.log(data, ", Wake Up")})

promise_2()
.then((data)=>{console.log("Toss: ", data)})
.catch((data)=>{console.log("Toss: ", data)})

//settled - resolved, rejected, pending
//unsettled



//Example with User Interface
document.getElementById('fetchButton').addEventListener('click', () => {
    // Simulate a network request with a Promise
    fetchData()
      .then(data => {
        document.getElementById('result').textContent = `Fetched Data: ${data}`;
      })
      .catch(error => {
        document.getElementById('result').textContent = `Error: ${error}`;
      });
  });
  
  function fetchData() {
    // Create a new Promise to simulate fetching data
    return new Promise((resolve, reject) => {
      // Simulate a network delay with setTimeout
      setTimeout(() => {
        const success = Math.random() > 0.2; // 80% chance of success
        if (success) {
          resolve('This is the fetched data!');
        } else {
          reject('Failed to fetch data.');
        }
      }, 1000); // 1 second delay
    });
  }
    
  document.getElementById('removeButton').addEventListener('click', ()=>{
    document.getElementById('result').textContent = '';
  })



  // Create a promise `reachA` that will either resolve or reject based on the `reached` variable
let reachA = new Promise((resolve, reject) => {
  const reached = false;  // Change this to `true` to test the resolve case
  if (reached) {
      // If `reached` is true, resolve the promise after 3 seconds with a message
      setTimeout(resolve, 3000, "Dineshkumar reached");
  } else {
      // If `reached` is false, reject the promise immediately with a message
      reject("Vidya not reached");
  }
});

// Create a promise `reachB` that will either resolve or reject based on the `reached` variable
let reachB = new Promise((resolve, reject) => {
  const reached = true;  // This is set to true to always resolve this promise
  if (reached) {
      // If `reached` is true, resolve the promise after 1 second with a message
      setTimeout(resolve, 1000, "Divya Dineshkumar reached");
  } else {
      // If `reached` is false, reject the promise immediately with a message
      reject("Ramya not reached");
  }
});

// Create a promise `reachC` that will either resolve or reject based on the `reached` variable
let reachC = new Promise((resolve, reject) => {
  const reached = true;  // This is set to true to always resolve this promise
  if (reached) {
      // If `reached` is true, resolve the promise after 2 seconds with a message
      setTimeout(resolve, 2000, "Darwin Divya Dinesh reached");
  } else {
      // If `reached` is false, reject the promise immediately with a message
      reject("Latha not reached");
  }
});

// Use Promise.all to wait for all promises to either resolve or reject
Promise.all([reachA, reachB, reachC])
  .then((message) => console.log("all", message))  // Will not be reached if any promise is rejected
  .catch((message) => console.log(message));       // Will catch the first rejection message

// Use Promise.allSettled to wait for all promises to settle (either resolved or rejected)
Promise.allSettled([reachA, reachB, reachC])
  .then((message) => console.log("allSettled", message))  // Logs the status and value of each promise
  .catch((message) => console.log(message));              // Will not be reached since allSettled never rejects

// Use Promise.any to wait for the first promise that resolves (ignores rejections)
Promise.any([reachA, reachB, reachC])
  .then((message) => console.log("any", message))  // Logs the first resolved promise's value
  .catch((message) => console.log(message));       // Will catch if all promises are rejected

// Use Promise.race to wait for the first promise to settle (resolve or reject)
Promise.race([reachA, reachB, reachC])
  .then((message) => console.log("race", message))  // Logs the value of the first promise that resolves or rejects
  .catch((message) => console.log(message));       // Logs the rejection reason if the first promise rejects
