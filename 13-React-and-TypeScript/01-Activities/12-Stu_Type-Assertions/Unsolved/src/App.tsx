import './App.css';
import { useEffect, useState } from 'react';
import User from '../src/interfaces/User';
import Nav from './components/Nav';
import Profile from './components/Profile';


function App() {

  // TODO: add type assertion to the useState hook
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser({
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, CA 12345'
    });
  }, []);

  return (
    <>
      {/* renders a Nav component and sets its name prop. */}
      {/* It checks if user is defined (not null). */}
      {/* If user is defined, it passes user.name to Nav as the name prop. */}
      {/* If user is not defined (initially when useState is null), it passes 'Guest' as a fallback name. */}
      {/* This ensures Nav always receives a name prop, even if user data hasn't loaded yet. */}
      <Nav name={user ? user.name : 'Guest'} />
      {/* TODO: Pass the necessary props to the Profile component */}

      {/* {user && <Profile ... />}: */}
      {/* This line uses conditional rendering to display the Profile component only if user exists (i.e., user is not null). */}
      {/* user &&:
          If user exists, it evaluates as true, so <Profile ... /> is rendered.
          If user is null, user && <Profile ... /> evaluates as false, so Profile won’t render, preventing errors.  */}

      {/* <Profile name={user.name} email={user.email} phone={user.phone} address={user.address} />: */}
      {/* When user exists, Profile is rendered with user properties as props:
          name={user.name}
          email={user.email}
          phone={user.phone}
          address={user.address}
          This makes sure Profile gets all necessary information directly from user. */}


      {user && <Profile name={user.name} email={user.email} phone={user.phone} address={user.address} />}
    </>
  );
}

export default App;
