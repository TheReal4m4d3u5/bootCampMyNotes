// TODO: Integrate the WeatherContext component into the App component below.

import './App.css'
import Alert from './components/Alert';
import { WeatherProvider } from '../src/components/WeatherContext'; // Adjust the path based on your project structure


const message = 'Important Message';
const alertType = "danger"
const adminMessage = 'System Maintenance Due Soon!';

const message2 = 'Important Warning';
const alertType2 = "warning"
const adminMessage2 = 'Database Backup Due Soon!';

function App() {
  return (
    <WeatherProvider>
      <Alert alertType={alertType} message={message} adminMessage={adminMessage} />
      <Alert alertType={alertType2} message={message2} adminMessage={adminMessage2} />
    </WeatherProvider>
  );
};


export default App;