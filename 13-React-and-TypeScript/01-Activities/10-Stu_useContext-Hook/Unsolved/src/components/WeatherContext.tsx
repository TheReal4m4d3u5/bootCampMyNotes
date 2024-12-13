import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the structure of the weather data
interface WeatherData {
  city: string;
  temperature: number;
  temperatureUnits: string;
  conditions: string;
}

// Create WeatherContext with a default empty object. 
// Note: Default values can help avoid errors if the context is used before data is loaded.
export const WeatherContext = createContext<WeatherData>({
  city: '',
  temperature: 0,
  temperatureUnits: 'Celsius',
  conditions: '',
});

// WeatherProvider component to wrap parts of your app where you want the context available
export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Set up initial weather data in state
  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: 'New York',
    temperature: 20,
    temperatureUnits: 'C',
    conditions: 'Clear',
  });

  useEffect(() => {
    // Example of updating weather data dynamically, such as from an API
    const fetchWeatherData = async () => {
      // Simulate an API call with new weather data
      const newWeatherData: WeatherData = {
        city: 'Los Angeles',
        temperature: 25,
        temperatureUnits: 'C',
        conditions: 'Sunny',
      };
      setWeatherData(newWeatherData); // Update the state with new data
    };

    fetchWeatherData();
  }, []);

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;