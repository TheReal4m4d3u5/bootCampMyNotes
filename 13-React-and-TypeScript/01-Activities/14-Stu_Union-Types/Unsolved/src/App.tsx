import './App.css';

function App() {
  const arr1: number[] = [1, 8, 3, 9, 2];
  const arr2: string[] = ['yo-yo', 'jawbreaker', 'apple', 'quick'];
  const str: string = 'Hello, world';
  const num: number = 42;

  // TODO: Create a function that takes an array of numbers or strings, a string, or a number as an argument and returns the right most element of the array or string or the last digit of the number.
  // TODO: use union types instead of any.
  function findRightMostValue(input: number[] | string[] | string | number): string | number {
    
    //Array.isArray(input) checks if input is an array.

    if (Array.isArray(input)) {
      // Rightmost element in the array If input is an array, we find the last item by using input[input.length - 1]
      return input[input.length - 1]; 


      // Check if input is a string:
      // typeof input === 'string' checks if input is a string.
      // If input is a string, we find the last character with input.charAt(input.length - 1).
      // Example: If input is "Hello, world", input.charAt(input.length - 1) gives "d" (the last character). 
    } else if (typeof input === 'string') {
      return input.charAt(input.length - 1); // Last character in the string


      // If input is a number, we:
      // Convert it to a string with input.toString().
      // Use .slice(-1) to get the last character of the string (which is the last digit of the number).
      // parseInt(...) then converts this last character back to a number.

    } else if (typeof input === 'number') {
      return parseInt(input.toString().slice(-1)); // Last digit of the number
    }
    return '. . '; // Fallback (should not reach here if all cases are covered)
  }

  return (
    <>
      <h2><code>{`const arr1: number[] =  [${arr1}];`}</code></h2>
      {/* should be 2 */}
      <p>{`The right most value is ${findRightMostValue(arr1)}.`}</p>
      <h2><code>{`const arr2: string[] =  [${arr2}];`}</code></h2>
      {/* should be 'quick' */}
      <p>{`The right most value is ${findRightMostValue(arr2)}.`}</p>
      <h2><code>{`const str: string =  '${str}';`}</code></h2>
      {/* should be 'd' */}
      <p>{`The right most value is ${findRightMostValue(str)}.`}</p>
      <h2><code>{`const num: number =  ${num};`}</code></h2>
      {/* should be 2 */}
      <p>{`The right most value is ${findRightMostValue(num)}.`}</p>
    </>
  )
}

export default App;
