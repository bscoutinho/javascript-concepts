// Rest Spread Operator (...)

// Spread Example

const a = [1, 2, 3]
const b = [4, 5, 6]

console.log([...a, ...b]) // [1, 2, 3, 4, 5, 6]
console.log([...a, ...b, 7, 8, 9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Rest Example

function createArr(...values){
    console.log(values)
}

createArr(1, 2, 3) // [1, 2, 3]
