// Ternary Operator - Shorthand IF/Else
const result1 = '2' === 2 ? 'true' : 'false'
console.log(result1)

// Short Circuit - Shorthand If
const result2 = '2' == 2 && 'true'
console.log(result2)

// Chaining operator - returns undefined if an object is undefined or null (instead of throwing an error).
const car = {type:"Fiat", model:"500", color:"white"};
let nameCar = car?.name;
console.log(nameCar)

// Nullish Coalescing Operator - returns the first argument if it is not nullish (null or undefined)
let nameVar = null;
let text = "missing";
let result = nameVar ?? text;
console.log(result)