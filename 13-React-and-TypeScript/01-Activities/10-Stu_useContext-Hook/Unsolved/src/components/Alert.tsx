// TODO: Integrate the `WeatherContext` component into the `Alert` component below.
// Each `Alert` component should display each of the `WeatherContext` fields.


import { useContext } from 'react';
import { WeatherContext } from './WeatherContext'; // Adjust the path to your actual WeatherContext location

interface AlertProps {
  alertType: string;
  message: string;
  adminMessage: string;
}

function Alert(props: AlertProps) {
  // Use the WeatherContext to access weather data
  const weatherData = useContext(WeatherContext);

  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      <p>{props.message}</p>
          
     
        <div>
          <h4>Weather Details:</h4>
          <p>City: {weatherData.city}</p>
          <p>Temperature: {weatherData.temperature}°{weatherData.temperatureUnits}</p>
          <p>Conditions: {weatherData.conditions}</p>
        </div>
    
    </div>
  );
}

export default Alert;
