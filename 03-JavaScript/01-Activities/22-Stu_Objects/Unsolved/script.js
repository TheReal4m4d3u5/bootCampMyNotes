// WRITE YOUR CODE BELOW


// * It's done when the `customerDrink` object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready.

const customerDrink = {
    // Propaerties are made up of key-value pairs
    name: 'someDrink',
    sugars: 223432.3,
    orderStatus: false,
  };
  

// * It's done when the drink name and the number of sugars is logged to the console.
console.log("The drinks name: " + customerDrink.name + " drink's sugars: " + customerDrink.sugars);

// * It's done when, if the order is ready, the message `"Ready for pick-up"` logs.


if(customerDrink.orderStatus){
    console.log("Ready for pick-up");
}else{
    console.log("Still in order queue");
}


// * It's done when, if the order is not ready, the message `"Still in order queue"` logs.


console.log("");
console.log("for in:");
for (const property in customerDrink) {
    console.log(`${property}: ${customerDrink[property]}`);
  }
  