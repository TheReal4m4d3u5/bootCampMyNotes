import React, { createContext, useState } from 'react';


export const ThemeContext = createContext({
  theme: 'light', // default theme
  toggleTheme: () => {}, // default function
});


// Create a new context for managing the current theme and the toggle function.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

// The ThemeProvider component manages the theme state for the application.

  // Define a state variable 'theme' with an initial value 'light'.


  // The toggleThem function allows us to toggle between 'light' and 'dark' themes.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the current theme and toggle function to all child components.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
