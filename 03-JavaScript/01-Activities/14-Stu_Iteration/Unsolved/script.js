// # 🏗️ Iterate Over an Array to Log Messages to Console
// Work with a partner to implement the following user story:
// * As a member of the class, I want to store a list of my classmates and use that list to create a greeting for each student on the list.
// ## Acceptance Criteria
// * It's done when the names of five classmates are stored in a single variable named `students`.
// * It's done when the total number of elements in the `students` array is logged to the console.
// * It's done when, using a `for` loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the `students` array.
// * It's done when, using a `for-of` loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the `students` array.
// ## 💡 Hints
// How can you access each element using the element's index and the array name?
// ## 🏆 Bonus
// If you have completed this activity, work through the following challenge with your partner to further your knowledge:
// * What’s a `while` loop?
// Use [Google](https://www.google.com) or another search engine to research this.
// ---
// © 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.





// WRITE YOUR CODE BELOW
// WRITE YOUR CODE HERE
const names = ["Avery", "Jane", "Jenny", "Jill"];

console.log(names.length);


console.log(names);
console.log("dssdsd " + names[1] + " sdfsdfs");

console.log(`Welcome to the class, ${names[0]}`);
console.log(`  Welcome to the class ${names[3]} `);
console.log(`  Welcome to the class ${names[3]}`);
console.log(`Welcome to the class, ${names[3]}`);
console.log(` The fourth name is ${names[3]}`);
console.log(`The fourth name is ${names[2]}`);
console.log(`The fourth name is ${names[1]}`);

names[0] = "Avery";

if(names[0] !== "Kim"){
    console.log('${names[0]} is in the class')
}


for(let i = 0; i < names.length; i++){
    console.log(names)
}