// All of the `createGreeting` functions are equivalent



// We can safely swap out function expressions with arrow functions most of the time
const createGreeting2 = (message, name) => {
  return `${message}, ${name}!`;
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
const createGreeting3 = (message, name) => `${message}, ${name}!`;

const greeting2 = createGreeting2("Hi", "Taylor");
const greeting3 = createGreeting3("Welcome", "Jordan");


console.log(greeting2);
console.log(greeting3);


// Function Expression
const createGreeting = function (message, name) {
  return `${message} ${name}!`;
};


const greeting1 = createGreeting("Hello", "Avery");

console.log(greeting1);

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
const greet = (greeting) => console.log(greeting);

// We call arrow functions the same way as we call regular functions
const greeting = createGreeting('Hello to', 'Angie');

// Logs "Hello, Angie!";
greet(greeting);
