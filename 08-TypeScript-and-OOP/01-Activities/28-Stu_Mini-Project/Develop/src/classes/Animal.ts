"use strict";
class Animal {
  
    name: string;
  
    constructor(animalNameArg: string) {
      this.name = animalNameArg;
    }
    getFirstName() {
        return this.name;
    }

}

export default Animal;



