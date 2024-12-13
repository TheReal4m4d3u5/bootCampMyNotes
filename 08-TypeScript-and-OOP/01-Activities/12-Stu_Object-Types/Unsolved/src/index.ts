// TODO: create a cat object called 'cat' with the following properties: name: string,
// age: number, pattern: string, isSleepy (optional) : boolean, 
// and siblings (optional) : string[]
// TODO: console.log the cat object
// TODO: console.log the cat's siblings if they exist


const cat: {
    // Properties are separated by semicolons
    name: string;
    age: number;
    pattern: string;
    isSleepy?: boolean;
    sibling?: string[];

    
  } = {
    name: 'Gryphon',
    age: 1, 
    pattern: 'aa',
    sibling: ['asdfa']

  };

  console.log(cat); 

  if(cat.sibling){
    console.log()

  }
