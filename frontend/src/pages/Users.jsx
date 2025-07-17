import React, { useEffect, useState } from 'react';
import UserProfileCard from '../components/UserProfileCard';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <UserProfileCard key={user._id} userId={user._id} />
      ))}
    </div>
  );
};

export default Users;