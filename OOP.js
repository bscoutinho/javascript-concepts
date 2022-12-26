// Object-Oriented Programming (OOP)

// Example 1 - Objects - Objects are like real-life entities

const user = {
    name: 'John Doe',
    username: 'johndoecrazy',
    password: 'jd123',
    login: function(username, password) {
        if (username.length > 0 && password.length > 0) {
            console.log('Login Succesfully')
        } else {
            console.log('Login Failed')
        }
    }
}

console.log(user.name)
user.login(user.username, user.password)

const fruits = [{id: 1, name: 'banana'},{id: 2, name: 'apple'}]


console.log(fruits[0].name)

// Example 2 - Class - Class is a blueprint of a real-life entity

class User {

    country = 'Belgium'

    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    login() {
        if(this.username.length > 0 && this.password.length > 0) {
            console.log('Login Succesfully')
            console.log('user country:', this.country )
        } else {
            console.log('Login Failed')
        }
    }
}

const employee1 = new User('John Doe', 'jdcrazy', 'jd123')
console.log(employee1.country)
employee1.login()


// Example 3 - Inheritance - When a child class inherits from parent class we don't need to write the same code again

class Author extends User {

    posts;

    constructor(name, username, password) {
        super(name, username, password)
        this.posts = 0;
    }

    createPost() {
        this.posts++;
    }

}

const author1 = new Author('Clark Kent', 'cksuper', 'ck123')
console.log(author1.posts)
author1.createPost();
console.log(author1.posts)

// Example 4 - Constructor Function - create an object like a Class

const user = function(name, username, password) {
    this.name = name,
    this.username = username,
    this.passord = password,
    this.login = function() {
        if (this.username.length > 0 && this.passord.length > 0) {
            console.log('Login Succesfully')
        } else {
            console.log('Login Failed')
        }
    }
}

const employee1 = new user('John Doe', 'jdcrazy', 'jd123')
employee1.login()

// Example 5 - Static methods - Only visible inside the Class scope

class Car {
    constructor() {}

    static drive() {
        console.log('driving')
    }

    stop() {
        console.log('stopping')
    }
}

const volvo = new Car()
volvo.drive() // function static not visible outside Class scope
volvo.stop()

