class User {
    
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    myMessage(message) {
        console.log(message + ' inside user')
    }
}

const employee = new User('Bruno', 'bsc', 'adm123')
employee.myMessage('Hello world')
