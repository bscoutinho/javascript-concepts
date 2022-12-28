// var, let & const - Types of variable declaration

function greet() {
    b = 'hello';
    console.log('b: ',b);
    // var b; // No restrictions and hoisting
    // let b;  // needs to be declared before initialization
    // const b = 'hello'; // needs to be initialized in declaration and value cannot be changed
}

greet();
