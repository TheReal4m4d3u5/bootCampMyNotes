// Write Your JavaScript Code Here

// Declares student variable. If the value of the variable will change, use the let keyword.
let personName = "Avery";
let pets = 1;
let funFact = "My dogs name is worlfgang"


console.log(`My name is ${personName}`);
console.log(`I have ${pets} pet`);
console.log(`Fun fact: ${funFact}`);

console.log(``);

personName = prompt("What is your name?");
pets = prompt("How many pets do you have?");
funFact = prompt("What is a fun fact about you?");



console.log(`My partners name is ${personName}`);

if(pets>1 && pets > 0){
    console.log(`They have ${pets} pet`);
}else{
    console.log(`They have ${pets} pets`);
}

console.log(`Their fun fact is: ${funFact}`);
