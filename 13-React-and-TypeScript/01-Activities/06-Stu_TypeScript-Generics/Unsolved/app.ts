// Generic function to return the first and last values of the provided array.
const getFirstAndLastArrayValues = <T>(inputArray: T[]):T[] => {

  if(!inputArray.length) return[];

  const resultArray = new Array<T>();
  resultArray[0] = inputArray[0];
  resultArray[1] = inputArray[inputArray.length - 1];
  return resultArray;
}

console.log(getFirstAndLastArrayValues([])); // []
console.log(getFirstAndLastArrayValues([99])); // [ 99, 99 ]
console.log(getFirstAndLastArrayValues([1, 2, 3, 4, 5])); // [ 1, 5 ]
console.log(getFirstAndLastArrayValues(['one', 'two', 'three', 'four', 'five'])); // [ 'one', 'five' ]


// The generic SimpleStack class provides push and pop functionality and a method to log the entire stack to the console.
class SimpleStack<T> {
  private _array: T[] = [];

  push(value: T): void {
    this._array.push(value);
  }

  //You can fix this by updating the pop method to return T | undefined, making it clear that it might return undefined if the stack is empty.
  pop(): T | undefined {
    return this._array.pop();
  }

	writeToConsole(): void {
    console.log(this._array);
	}
}

const stack1 = new SimpleStack<number>();
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.pop();
stack1.writeToConsole(); // [ 3, 4 ]

// we are at the point of creating the objects; therefore, we have to enforce our types and we cannot make this generic, SimpleStock is saying 
// enforce these rules on data being passed
const stack2 = new SimpleStack<string | number>();
stack2.push('three');
stack2.push('four');
stack2.push(5);
stack2.writeToConsole(); // [ 'three', 'four', 5 ]
