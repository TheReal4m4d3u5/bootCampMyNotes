import './App.css';
import { useState } from 'react';

import CountHeader from './components/CountHeader';
import CountTitle from './components/CountTitle';
import CountDisplay from './components/CountDisplay';

// It imports a CSS file for styling and useState from React.
// Three components, CountHeader, CountTitle, and CountDisplay, are imported.



export default function App() {

  // The main App component initializes a count state with useState.
  const [count, setCount] = useState(0)

  return (

    // The render function includes:
    // CountHeader as a wrapper for CountTitle.
    // CountDisplay, which renders the count value as a child.
    // Two buttons, "Increment" and "Decrement," each with inline styling for margin, adjusting the count state on click.

    <div>
      <CountHeader>
        <CountTitle />
      </CountHeader>
      <CountDisplay>
        {count}
      </CountDisplay>
      <button style={{margin: "5px"}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{margin: "5px"}} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
