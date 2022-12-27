// Async/Await - Sintax to simplify asynchronous functions in JS
// Await keyword work based on promises 

// Example 1

async function getUser(userId) {
    
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let userData = await response.json();
    return userData.name;
}

let user = getUser(1)

// Example 2

async function calcResult() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log('result is: ',result)
  }
  
  calcResult();
