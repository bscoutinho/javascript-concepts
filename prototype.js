// Prototype - When a object is created, Javascript create a "copy" (prototype) inside the object
// This "copy" (prototype) point to the original object.

// Example 1 = prototype structure

function Person(name) {
    this.name = name
    this.tellMyName = function () {
        console.log('name: ', this.name)
    }
}

let personObj = new Person('Bruno');

personObj.tellMyName()
console.log(Person.prototype) // property prototype created automatically in a function
console.log(personObj.__proto__) // prototype created automatically in a object

// Example 2 = change object structure from a prototype

function Person2(name) {
    this.name = name
    this.tellMyName = function () {
        console.log('name: ', this.name)
    }
}

Person2.prototype.age = 30;

let personObj2 = new Person2('James');
console.log('age: ',personObj2.age)


