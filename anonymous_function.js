// Anonymous Functions - Is a function without name 
 
// Example 1
let show = function() {
    console.log('Anonymous function');
};

show();

// Example 2 - function as an argument

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

// Example 3 - Immediately invoked function execution

(function () {
    console.log('Immediately invoked function execution');
})();
