import React, { useEffect, useState } from 'react';
import UserProfileCard from './components/UserProfileCard';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched users:', data);
        setUsers(data);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-wrap justify-center gap-6">
      {users.map((user) => (
        <UserProfileCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default App;