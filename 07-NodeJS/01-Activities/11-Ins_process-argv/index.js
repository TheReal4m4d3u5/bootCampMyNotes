// returns an array of command line arguments
console.log(process.argv);

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);


switch(process.argv[2]){
    case 'tell a joke':
        console.log("what did asdfasd");

        setTimeout(() =>{
            console.log("do you smell carrots")
        },1000);
        break;
        default:
            console.log("U can tell a joke");
}




//type hello word at the end of the terminal