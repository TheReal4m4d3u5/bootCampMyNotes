// Functional Declaration
function addFood(entree: string, dessert: string): string {
  return `The ${entree} and ${dessert} are put in for order!`;
}

console.log(addFood('Spaghetti', 'Cheesecake'));
console.log('=========================================');

// Function expression with return type of void
const cookFood = function (entree: string, dessert: string): void {
  console.log(`Cooking the ${entree} and preparing the ${dessert}!`);
};

cookFood('Fried Rice', 'Boba Tea');

const yummyFood: string[] = ['Chicken', 'Fries'];
console.log('=========================================');


// Anonymous Functions
yummyFood.forEach((food: string) => {
  console.log(`eating yummy ${food}!`);
});


