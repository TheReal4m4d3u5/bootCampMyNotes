import List from './components/List';
import Nav from './components/Nav';

// Import our list of users from users.js
import users from './users';

// Pass users array to the List component as a prop
export default function App() { //Container, job to render data of other data 
  return (
    <div>
      <Nav />
      <List users={users} />
    </div>
  );
}
