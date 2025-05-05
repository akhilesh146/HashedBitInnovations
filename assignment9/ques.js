//q1.js

function variableScopeDemo() {
    var x = "I am var";     
    let y = "I am let";     
    const z = "I am const"; 

    console.log(x);
    console.log(y);
    console.log(z);
}

variableScopeDemo();

//var is function-scoped — accessible throughout the function it’s declared in.

//let is block-scoped — only accessible within the {} block it’s declared in.

//const is also block-scoped like let, but cannot be reassigned after declaration.


console.log("----------------------------------------------------------");

//q2.js

const fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

function getSecondFruit() {
    return fruits[1]; 
}

console.log(getSecondFruit()); 


console.log("----------------------------------------------------------");

//q3.js

function modifyArray(arr) {
    arr.push("Pineapple"); 
    console.log(arr);
    arr.pop();               
    return arr;
}

console.log(modifyArray(fruits));

console.log("----------------------------------------------------------");

//q4.js

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}


console.log(squareNumbers(numbers));

console.log("----------------------------------------------------------");


//q5.js
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(filterOddNumbers(numbers));


console.log("----------------------------------------------------------");
//q6.js

const person = {
    name: "Alice",
    age: 28,
    occupation: "Engineer"
};

function greetPerson(p) {
    console.log(`Hello, my name is ${p.name}. I'm ${p.age} years old and I work as a ${p.occupation}.`);
}

greetPerson(person);


console.log("----------------------------------------------------------");

//q7.js

function calculateArea(rect) {
    return rect.width * rect.height;
}

console.log({width: 5, height: 10});



console.log("----------------------------------------------------------");

//q8.js

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log(getObjectKeys({ name: "Bob", age: 30, job: "Designer" }));

console.log("----------------------------------------------------------");

//q9.js
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const a = { name: "John", age: 25 };
const b = { occupation: "Developer", city: "New York" };

console.log(mergeObjects(a, b));



console.log("----------------------------------------------------------");


//q10.js
const num = [10, 20, 30, 40, 50];

function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

console.log(sumArray(num));



