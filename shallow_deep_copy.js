// Shallow and Deep copy
let employee = {
    name: 'Jack',
    address: 'London',
}

console.log('employee: ',employee);

// Example 1 - Shallow copy - When a variable is copied into a new variable using the assignment operator
// both the old and new variable point to the same object in memory
console.log("=========Shallow Copy========");
let shallowEmployee = employee; // linking both variables
shallowEmployee.name = 'Bruno';
console.log('employee: ',employee);
console.log('new employee: ',shallowEmployee);

// Example 2 - Deep copy - allocates separate memory location for the new object and then assigns the copied members to the new object
// both variables are independent of each other in case of any modification
console.log("=========Deep Copy========");
let deepEmployee = JSON.parse(JSON.stringify(employee));
deepEmployee.name = 'Hugo'
console.log('employee: ',employee);
console.log('new employee: ',deepEmployee);

