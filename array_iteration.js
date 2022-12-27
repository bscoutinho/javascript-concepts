// Array iteration

const numbers = [2, 4, 9, 16, 25];
const nestedArr = [[1,2],[3,4],[5,6]];
console.log('original array: ', numbers)

// Example 1 - ForEach - calls a callback function once for each array element
let result1 = numbers.forEach((value, index, array) => {
    //console.log(`Array - index: ${index} - value: ${value}`)
    return value * 2
})
console.log('result forEach: ',result1)

// Example 2 - map - creates a new array by performing a function on each array element
// method does not change the original array
let result2 = numbers.map((value, index, array) => {
    //console.log(`Array - index: ${index} - value: ${value}`)
    return value * 2
})
console.log('result map: ',result2)

// Example 3 - filter - creates a new array with array elements that pass a test
let result3 = numbers.filter((value, index, array) => value > 10)
console.log('result filter: ',result3)

// Example 4 - find - Find the value of the first element that pass a test
let result4 = numbers.find((value, index, array) => value > 10)
console.log('result find: ',result4)

// Example 5 - every - checks if all array values pass a test
let result5 = numbers.every((value, index, array) => value > 10)
console.log('result every: ',result5)

// Example 6 - some - checks if some array values pass a test
let result6 = numbers.some((value, index, array) => value > 10)
console.log('result every: ',result6)

// Example 7 - reduce - runs a function on each array element to reduce it to a single value
let result7 = numbers.reduce((prev, curr, index, array) => prev + curr)
console.log('result reduce: ',result7)

// Example 8 - reduce - runs a function on each array element to reduce it to a single value. Right to left
let result8 = numbers.reduceRight((prev, curr, index, array) => prev + curr)
console.log('result reduce: ',result8)

// example 9 - flatMap() - maps all elements of an Array and then creates a new array by flattening the array
let result9 = numbers.flatMap((x) => x * 2)
console.log('result flatMap: ',result9)



