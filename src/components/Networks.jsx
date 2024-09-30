import React from 'react'
import Header from './Header'

const Networks = () => {
     const friends = [
    { name: 'Alice John', email: 'alice@example.com', image: '/images/user.svg' },
    { name: 'Bob Smith', email: 'bob@example.com', image: '/images/user.svg' },
    { name: 'Charlie Brown', email: 'charlie@example.com', image: '/images/user.svg' },
    { name: 'David Wilson', email: 'david@example.com', image: '/images/user.svg' },
    { name: 'Eva Green', email: 'eva@example.com', image: '/images/user.svg' },
    { name: 'Frank Thomas', email: 'frank@example.com', image: '/images/user.svg' },
    { name: 'David Wilson', email: 'david@example.com', image: '/images/user.svg' },
    { name: 'Eva Green', email: 'eva@example.com', image: '/images/user.svg' },
    { name: 'Frank Thomas', email: 'frank@example.com', image: '/images/user.svg' },
  ];
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8 pt-14">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Friend List</h1>
      </header>

      <section className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Friends</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend, index) => (
            <li key={index} className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
              <img
                src={friend.image}
                alt={friend.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{friend.name}</p>
                <p className="text-gray-600">{friend.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    <Header/>
    </>
  )
}

export default Networks