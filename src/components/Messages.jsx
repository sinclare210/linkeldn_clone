import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Messages = (props) => {
  const messages = [
    { id: 1, sender: 'Alice', text: 'Hey! How are you?' },
    { id: 2, sender: 'Bob', text: 'Don’t forget our meeting tomorrow!' },
    { id: 3, sender: 'Charlie', text: 'I sent you the files you requested.' },
    { id: 4, sender: 'David', text: 'Looking forward to the game this weekend!' },
    { id: 5, sender: 'Eva', text: 'Can you help me with the project?' },
    { id: 6, sender: 'Frank', text: 'Let’s catch up sometime soon.' },
    { id: 7, sender: 'Grace', text: 'How was your weekend?' },
    { id: 8, sender: 'Henry', text: 'Are we still on for lunch?' },
    { id: 9, sender: 'Isabella', text: 'Don’t forget to send me the details.' },
    { id: 10, sender: 'Jack', text: 'I’m really enjoying the new book!' },
    { id: 11, sender: 'Kathy', text: 'Can we reschedule our meeting?' },
    { id: 12, sender: 'Liam', text: 'What do you think of the new policy?' },
    { id: 13, sender: 'Mia', text: 'I’m free to chat anytime this week.' },
    { id: 14, sender: 'Noah', text: 'I found a great restaurant we should try.' },
    { id: 15, sender: 'Olivia', text: 'Let’s plan a trip soon!' },
  ];
  return (
    <>
   
     <div className="min-h-screen bg-gray-100 p-8 pt-14">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Messages</h1>
      </header>

      <section className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Recent Messages</h2>
        <ul className="space-y-4">
          {messages.map((message) => (
            <li key={message.id} className="p-4 bg-gray-50 rounded-lg shadow flex items-start">
              <div className="mr-4">
                <p className="font-bold text-blue-600">{message.sender}</p>
              </div>
              <p className="text-gray-800">{message.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
    <Header/>
    </>
  )
}





export default (Messages)
