// Import `useEffect` Hook from React
import { useState, useEffect  } from 'react';

function Thermostat() {
  // Set the starting temperature
  const [temp, setTemp] = useState(70);

  // TODO: Use the `useEffect` Hook to set the `document.title` to the current temperature
  // YOUR CODE HERE
  //


  // Only when temp changes
  useEffect(() => {
    document.title = `Temperature: ${temp}°F`;
  }, [temp]);


  //when any prop or state change
  useEffect(() => {
    document.title = `Temperature: ${temp}°F`;
  }, );

  // Handler for increasing the temp by 1
  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  // Handler for decreasing the temp by 1
  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Building Temperature
      </div>
      <div className="card-body">
        <p className="card-text">
          Current temperature: {temp} degrees Fahrenheit
        </p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={increaseTemp}
        >
          Raise temperature
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary"
          onClick={decreaseTemp}
        >
          Lower temperature
        </button>
      </div>
    </div>
  );
}

export default Thermostat;
