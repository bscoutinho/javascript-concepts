// String methods

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text2 = "Apple, Banana, Kiwi";

console.log(text.length) // 26
console.log(text2.slice(7, 13)); // Banana
console.log(text2.replace("Banana", "Mango")); // "Apple, Mango, Kiwi"
text2.toLowerCase(); // convert all string to lower case
text2.concat; // concatenate two strings
text2.trim(); // eliminate blank spaces
text2.trimStart(); // eliminate blank spaces in the beginning of string
text2.trimEnd(); // eliminate blank spaces in the end of string
text2.padStart(4,"x"); // pads a string with another string
text2.padEnd(4,"x"); // pads a string with another string
text2.charAt(0) // returns the character at a specified index (position) in a string
text2.charCodeAt(0) // eturns the unicode of the character at a specified index in a string
text2.split(",") // convert a string in an array
text2.includes("Banana") // returns true if a string contains a specified value, otherwise false
text2.startsWith("Banana") // returns true if a string begins with a specified value, otherwise false
text2.startsWith("Kiwi") // returns true if a string ends with a specified value, otherwise false


