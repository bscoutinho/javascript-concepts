// Arrays methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const otherfruits = ["Kiwi", "Strawberry", "Lemon"]
const text = "ABCDEFG"
const nestedArr = [[1,2],[3,4],[5,6]];

let result = nestedArr.flat()
console.log(result)

fruits.toString() // convert to string -  Banana,Orange,Apple,Mango
fruits.sort() // sort alphabetically -  [ 'Apple', 'Banana', 'Mango', 'Orange' ]
fruits.reverse() // invert element positions -  [ 'Mango', 'Apple', 'Orange', 'Banana' ]
fruits.length // Array size -  4 
fruits.pop(); // removes the last element from an array - [ 'Banana', 'Orange', 'Apple' ]
fruits.push("Kiwi"); // adds a new element to an array (at the end) -  [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
fruits.shift(); // removes the first array element and "shifts" all other elements to a lower index -  [ 'Orange', 'Apple', 'Mango' ]
fruits.unshift("Lemon"); // adds a new element to an array (at the beginning), and "unshifts" older elements -  [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits.concat(otherfruits) // creates a new array by merging (concatenating) existing arrays
fruits.splice(2, 0, "Lemon", "Kiwi") // Add or remove elements according to parameters -  [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
fruits.slice(2); // slices out a piece of an array into a new array -  [ 'Apple', 'Mango' ]
fruits.copyWithin(2,0) // copies array elements to another position in an array, overwriting existing values -  [ 'Banana', 'Orange', 'Banana', 'Orange' ]
fruits.valueOf() // returns the array itself -  [ 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits.fill("Kiwi",2,4) // fills specified elements in an array with a value -  [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]
Array.from(text) // convert text in array -  ['A', 'B', 'C','D', 'E', 'F','G']
fruits.includes("Mango") // returns true if an array contains a specified value -  true
fruits.indexOf("Apple") // returns the position of a specified value in an array -  2
Array.isArray(fruits) // Check if an object is an array -  true
fruits.join() // returns an array as a string -  Banana,Orange,Apple,Mango
fruits.lastIndexOf("Apple"); // find the last index of a value -  2
nestedArr.flat() // creates a new array by flattening a nested array -  [ 1, 2, 3, 4, 5, 6 ]


