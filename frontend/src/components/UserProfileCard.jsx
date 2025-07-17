import React from 'react';

const UserProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-72 transition transform hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-500"
        />
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;