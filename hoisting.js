// Hoisting - A behavior in which a variable can be used before declaration.

// Example 1

var a;
console.log(a);

a = 5;

console.log(a);

// Example 2

var a = 4;

function greet() {
    b = 'hello';
    console.log('b1',b);
    console.log('a1', a);
    var b;
}

greet();
console.log('b2',b)

// Example 3

greet();

let greet = function greet() {
    console.log('Hello');
}




