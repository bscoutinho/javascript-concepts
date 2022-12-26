// This - Reference a variable/object in the scope

// Example 1

function alert() {
    let age = 40;
    console.log(`${this.age} years old`)
}

const person = {
    age: 12,
    alert: alert
}

person.alert();