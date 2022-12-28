// Hoisting - A behavior in which a variable can be used before declaration.

var a = 4;

function greet() {
    b = 'hello';
    console.log('b1: ',b);
    console.log('a: ',a);
    var b;
    // let b;
    // const b;
}

greet();





