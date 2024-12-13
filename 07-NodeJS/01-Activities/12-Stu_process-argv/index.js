console.log(process.argv);


let var1 = process.argv[2];
let var2 = process.argv[3];

console.log(var1 === var2);

if(var1 === var2){
    console.log("true");
}else{
    console.log("false");
}

//skip element , , - sets variables argument1 and 2 from argv array
const [ , ,  argument1, argument2] = proces.argv;

console.log(parseInt(argument1) === parseInt(argument2));

