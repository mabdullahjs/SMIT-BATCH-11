import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const App = () => {

  const {data , isLoading , isError} = useQuery('users', async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      return res.data;
    });
    
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error occured...</h1>}
      {data && data.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default App;
