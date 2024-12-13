import { useEffect, useState } from 'react';
import UserList from '../components/Users';
import { retrieveUsers } from '../api/userAPI';
//TODO: Import retrieveUsers from the userAPI

const Home = () => {
  //TODO: Set up a state to hold the user data
  const [users, setUsers] = useState([]); // State to hold user data

  useEffect(() => {
    //TODO: Call fetchUsers when the component mounts
    fetchUsers(); // Call fetchUsers when component mounts
  }, []);

  const fetchUsers = async () => {
    //TODO: Call the retrieveUsers API and update your users state
    const data = await retrieveUsers(); // Fetch user data from API
    if (data) {
      setUsers(data); // Update state with fetched data
    }
  };

  return <UserList users={users} />;
};

export default Home;
