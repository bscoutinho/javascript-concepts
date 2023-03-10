// Promise - Define an action executed in the future and manage the response

// Syntax

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
});

myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

// Example 1 - then/catch/finally

function checkValue() {
  return new Promise((resolve, reject) => {
      let x = 5;

      if(x > 3 ) {
          resolve('Number is valid')
      } else {
          reject('Number no valid')
      }
  })
}

checkValue()
.then((success) => { console.log(success) }) // Successfull 
.catch((err) => { console.error(err) }) // Failed
.finally(() => { console.log("Experiment completed") }); // Always


// Example 2 - promise.all() - manage result from several promises at once

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

