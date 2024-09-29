import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Header from './Header'


const Job = ({job}) => {
  return (
    <>
   
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-500 text-sm">Location: {job.location}</p>
        <p className="text-gray-500 text-sm">Job Type: {job.type}</p>
        <p className="mt-4 text-gray-700">{job.description}</p>
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
     <Header/>
     </>
  )
 
}





export default (Job)



