// Access element using id
const articlesDiv = document.getElementById('articles');
const headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = '50px';


headerDiv.style.color = 'white';



const firstChildHeader = document.querySelector("h1");
console.log(firstChildHeader);
firstChildHeader.style.color = 'white';
firstChildHeader.style.fontSize = '50px';


// const firstChildHeader = document.querySelector("header").children[0];
// console.log(firstChildHeader);
// firstChildHeader.style.color = 'red';
// firstChildHeader.style.fontSize = '50px';