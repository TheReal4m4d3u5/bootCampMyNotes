const constellations = ['Orion', 'Scorpius', 'Lyra', 'Ursa Major', 'Ursa Minor'];
const planets = ['Earth', 'Saturn', 'Mars', 'Jupiter', 'Uranus', 'Venus'];
const star = 'polaris';

// WRITE YOUR CODE BELOW


//* It's done when the string `"Canis Major"` is added as the first element of the `constellations` array and no elements are removed.

constellations.unshift("Canis Major");


//* It's done when `"Venus"` is removed from the `planets` array.

planets.splice("Venus"); 

for(i=0; i<planets.length; i++){
    console.log(planets[i]);s
}





//* It's done when the arrays `constellations` and `planets` are joined to form a new array named `galaxy`. The arrays `constellations` and `planets` should not be altered.

const galaxy = constellations.concat(planets);


//* It's done when the string `"polaris"` is converted into all capital letters and the new string is stored in a variable.


let bigstar = star.toUpperCase;






