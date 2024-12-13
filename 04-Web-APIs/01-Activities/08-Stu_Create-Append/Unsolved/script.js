// ## Acceptance Criteria
// * It's done when an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"
// * It's done when the ordered list has a background color of `#333333` and padding of `20px`.
// * It's done when each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.
// * It's done when each list item has a different background color.


const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

li1.textContent = `Apples`;
li2.textContent = `Pizza`;
li3.textContent = `Dumplings`;
li4.textContent = `Cupcakes`;

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', '../images/kitten.jpg');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// TODO: Add ordered list items containing four favorite foods
document.body.appendChild(listEl).appendChild(li1); //listEl.appendChild(li1)
document.body.appendChild(listEl).appendChild(li2);
document.body.appendChild(listEl).appendChild(li3);
document.body.appendChild(listEl).appendChild(li4);

listEl.setAttribute('style', 'background: Darkgrey; padding: 50px');
li1.setAttribute('style', 'background: grey;');
li2.setAttribute('style', 'background: blue;');
li3.setAttribute('style', 'background: red;');
li4.setAttribute('style', 'background: yellow;');
favoriteEl.setAttribute('style', 'font-weight: bold; ');
kittenEl.setAttribute('style', 'font-weight: bold;');
nameEl.setAttribute('style', 'font-weight: bold;');