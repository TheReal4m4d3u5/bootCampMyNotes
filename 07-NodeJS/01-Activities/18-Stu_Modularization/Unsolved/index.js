// TODO: Import `basicmath.js`
import maths from './basicmath.js';


// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// let [ , ,  operation, numOne, numTwo] = process.argv;
let { 2: operation, 3: numOne, 4: numTwo} = process.argv;

numOne = parseFloat (numOne);
numTwo = parseFloat (numTwo);


// TODO: Create a `switch` statement that accepts an `operation` parameter

switch(operation) {
    case 'sum':
        console.log(
            maths.sum(numOne, numTwo)
        );
        break;
    case 'difference':
        console.log(
            maths.difference(numOne, numTwo)
        );
        break;
    case 'product':
        console.log(
            maths.product(numOne, numTwo)
        );
        break;
    case 'quotient':
        console.log(
            maths.quotient(numOne, numTwo)
        );
        break;
    default: console.error("error asdjflasjdf ")

  }


// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
