// Debouncing - Debouncing is a method used in JavaScript to increase browser performance.

// A higher-order function that returns another function is known as a debounce function. 
// It is used to create a closure around the func and wait function parameters and the timeout variable to hold their values.

// example 1

function debounce(func, timeout = 5000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
    
function saveInput(){
    console.log("Hello\nNo matter how many times you" +
    "click the debounce button, I get " +
    "executed once every 5 seconds!!");
}

const execute = {
    debounce: debounce(() => saveInput())
}

execute.debounce()      

