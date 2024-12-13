import { useState } from 'react';
import './App.css';


function App() {

  const [text, setText] = useState('');

  // TODO: What type of event are we handling here?
  // The handleChange function is handling an input change event on an 
  // <input> element. The appropriate type here is:
  // React.ChangeEvent<HTMLInputElement>
  // This type ensures that e.target will refer to an HTML input element, 
  // allowing access to properties like e.target.value. 
  // This type is accurate and provides type safety when accessing 
  // values within the event handler.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const isValid = (input: string) => {
    // Check if input is alphanumeric lowercase and also allow underscore


    //The regular expression ^[a-z0-9_]*$ effectively checks if the input 
    //string contains only lowercase alphanumeric characters (a-z and 0-9) 
    //and underscores (_). Here’s a breakdown of how it works:

    // ^: Asserts the start of the string.
    // [a-z0-9_]: Matches any lowercase letter (a-z), digit (0-9), or underscore (_).
    // *: Allows zero or more repetitions of the preceding pattern.
    // $: Asserts the end of the string.
    // So, const regex = /^[a-z0-9_]*$/; will match strings that consist only of 
    // lowercase letters, numbers, and underscores and will allow empty strings as well.

    const regex = /^[a-z0-9_]*$/;

    // use regex.test() to check if input is valid and input.length to check if it is at least 5 characters long
    return regex.test(input) && input.length >= 5;
  }

  // TODO: What type of event are we handling here?
  // first checking the mouse and then we are checking the shift key
  const handleMouseEnter = (e: React.MouseEvent<HTMLFormElement>) => {
    // TODO: How does this work?
    if (e.shiftKey) {
      alert("Mouse Entered Form with Shift Key Pressed");
    }
  }

  // TODO: What type of event are we handling here?
  // The handleSubmit function here is handling the form submission and includes three key actions:

  // e.preventDefault(): Prevents the form’s default submission behavior, which would otherwise cause a page reload.
  // alert("Form Submitted with valid input!"): Displays an alert to the user, confirming the form was submitted with valid input.
  // setText(''): Resets the text state to an empty string, effectively clearing the input field after submission.
  // This setup is efficient and straightforward for handling form submissions. Here’s the function as you've written it:
  // This type (React.FormEvent<HTMLFormElement>) ensures the event object 
  // e is compatible with form events, providing access to methods like preventDefault() and making it type-safe.
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted with valid input!");
    setText('');
  }

  return (
    <div className="App">
      <h1>Typing DOM Events</h1>
      {/* TODO: What type of events are we handling here? */}
      {/* onSubmit: This is a submit event triggered when the form is 
      submitted, often by clicking a submit button or pressing "Enter" 
      within the form. The event type is React.FormEvent<HTMLFormElement> in TypeScript.
      onMouseEnter: This is a mouse enter event triggered when the mouse 
      pointer enters the form element. The event type is React.MouseEvent<HTMLFormElement>
       in TypeScript. */}

      <form onSubmit={handleSubmit} onMouseEnter={handleMouseEnter}>
        {/* TODO: What type of event are we handling here? */}
        <input type="text" value={text} onChange={handleChange} />
        <p>Text Input Valid: <span style={isValid(text) ? { color: "green" } : { color: "red" }}>{isValid(text) ? "True" : "False"}</span></p>
        {isValid(text) && <button>Submit</button>}
      </form>
    </div>
  )
}

export default App;
