// First we import Greeting from the components folder
import Greeting from "./components/Greeting";

// Our App component returns the Greeting component
function App() {


  const welcomeStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`)
  }

  return <Greeting welcomeStudent={welcomeStudent}/>;
}

export default App;
