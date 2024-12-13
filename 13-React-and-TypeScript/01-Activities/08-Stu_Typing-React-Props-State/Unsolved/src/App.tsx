// TODO: Integrate the Advertisement component into the App component below. Create two instances of the component.

import './App.css'
import Calculator from './components/Calculator';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <>
      <Advertisement 
        companyName="Tech Corp" 
        productDescription="The latest in tech gadgets" 
        price="$299.99" 
      />
      <Advertisement 
        companyName="Home Goods Inc." 
        productDescription="Premium quality furniture" 
        price="$1,299.99" 
      />
      <Calculator />
    </>
  );
}

export default App
