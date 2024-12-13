import colors from 'colors';




const [ , ,  argument1, argument2] = process.argv;

argument2 = parseInt(argument2);


const { 2: argument3, 3: argument4} = process.argv;

let { 2: operation, 3: numOne, 4: numTwo} = process.argv;

// if(argument2 > 0)
//     console.log(colors.bgYellow(argument1 +argument2));
// else
//     console.log(colors.bgRed(argument1 +argument2));

console.log(`${colors.bgYellow(argument1)} ` + " "+  argument2 > 0 ? colors.bgGreen(argument2) : colors.bgRed(argument2) );


