//Var
var message = "Hello, World!";
console.log(message);

//Let
let count = 0;
count = 5; // Valid //Reassign
console.log(count);

//Const
const PI = 3.14;
console.log(PI);
// PI = 3.14159; // Error: Assignment to constant variable.

//Variable Naming Rules
let age = 25;
let _name = "John";
let $price = 100;

// let 1stName = "Alice"; // Error: Cannot start with a digit.
// let class = "Math";    // Error: Reserved keyword.

//Global Scope:-
    //Variables declared outside any function or block are globally scoped
var globalVar = "I am global";

function showVar() {
    console.log(globalVar); // Accessible here
}

//Function Scope:-
    //Variables declared with var inside a function are only accessible within that function.
function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Accessible here
}
// console.log(localVar); // Error: localVar is not defined.

//Block Scope:-
        // (Variables declared with let or const inside {} are only accessible within that block.)
{
    let blockScopedVar = "Block Scoped";
    console.log(blockScopedVar); // Accessible here
}
// console.log(blockScopedVar); // Error: blockScopedVar is not defined.


//Variable Hosting
//console.log(x); // undefined (hoisting with `var`)
//var x = 10;

//console.log(y); // Error: Cannot access 'y' before initialization
//let y = 20;

//Primitive Types:
let name = "Alice";   // String
let age1 = 25;         // Number
let isStudent = true; // Boolean
let score;            // Undefined
let data = null;      // Null

//Best Practice
let userAge = 30; // Good
let c = 30;       // Bad: Not descriptive

//Example
const appName = "WeatherApp"; // Constant value
let temperature = 20;         // Changeable value
let isRaining = false;        // Boolean

// Function demonstrating local scope
function updateWeather(temp, rainStatus) {
    let message = `The temperature is ${temp}°C.`;
    if (rainStatus) {
        message += " It's raining.";
    } else {
        message += " It's sunny.";
    }
    console.log(message);
}

updateWeather(temperature, isRaining);

//Examples

var a ; //Variable Declaration
document.writeln(a); 

a = 100; //Assigning
document.writeln(a); 

var b = 200; //variable initialization
document.writeln(b);

let e; //Variable Declarion
e = 111; //Assigning
document.write(e); 

let z = 222;
document.write(z);


b = 2020; //Modify
x = 1010;

document.writeln(b,x); 

document.writeln(PI);

//PI = 1.6; //error

