const retrieveUsers = async () => {
  //TODO: Add a fetch to request the user data from the server


  try {
    const response = await fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
    }); 

    const data = await response.json();
    
    if (!response.ok) { //looking for 200 responce
      throw new Error('Failed to fetch user data');
    }
   
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};


export { retrieveUsers };
