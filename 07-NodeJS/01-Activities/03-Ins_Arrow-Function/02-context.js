// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

const person = {
  name: 'Hodor',

  saySomething: function () {

    console.log(`${this.name} is thinking 1...`);
    
    setTimeout(function () {
      console.log(`${this.name} kjljklj !`);
    }, 100);

  },
};

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later
// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
const person2 = {
  name: 'Hodor',

  saySomething: function () {
    
    console.log(`${this.name} is thinking..asdfasdfad.`);

    setTimeout(() => console.log(`${this.name}  asdfasdf2!`), 100);
  },

};

person2.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later
