// WRITE YOUR CODE HERE
const names = ["Avery", "Jane", "Jenny", "Jill"];

console.log(names.length);


console.log(names);
console.log("dssdsd " + names[1] + " sdfsdfs");

console.log('Welcome to the class, ${names[0]}');
console.log('Welcome to the class ${names[3]} ');
console.log(`Welcome to the class ${names[3]}`);
console.log('Welcome to the class, ${names[3]}');
console.log(`The fourth name is ${names[3]}`);
console.log(`The fourth name is ${names[2]}`);
console.log(`The fourth name is ${names[1]}`);

names[0] = "Avery";

if(names[0] !== "Kim"){
    console.log('${names[0]} is in the class')
}