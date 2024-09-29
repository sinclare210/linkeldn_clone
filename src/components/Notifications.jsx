import React from 'react'
import Header from './Header'

const Notifications = () => {
    

  const notifications = [
    { id: 1, type: 'info', message: 'Your profile has been updated successfully.' },
    { id: 2, type: 'success', message: 'You have a new follower!' },
    { id: 3, type: 'warning', message: 'Your password will expire in 3 days.' },
    { id: 4, type: 'error', message: 'Failed to load new messages.' },
    { id: 5, type: 'info', message: 'System maintenance scheduled for tonight.' },
    { id: 6, type: 'success', message: 'Your comment has been approved.' },
  ];
    const getNotificationClass = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-500 text-green-800';
      case 'error':
        return 'bg-red-100 border-red-500 text-red-800';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'info':
      default:
        return 'bg-blue-100 border-blue-500 text-blue-800';
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8 pt-14">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
      </header>

      <section className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Recent Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className={`flex items-center p-4 border-l-4 rounded-lg shadow ${getNotificationClass(notification.type)}`}>
              <div className="ml-2">
                <p>{notification.message}</p>
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

export default Notifications