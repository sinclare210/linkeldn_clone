import React from 'react'
import Job from './Job';

const JobListing = () => {
    const jobs = [
    {
      id: 1,
      title: 'Front-End Developer',
      company: 'Company A',
      location: 'New York, NY',
      type: 'Full-Time',
      description: 'Join our team as a Front-End Developer and help us build amazing user experiences.'
    },
    {
      id: 2,
      title: 'Back-End Developer',
      company: 'Company B',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description: 'Seeking a skilled Back-End Developer to manage and optimize our server-side applications.'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Company C',
      location: 'Austin, TX',
      type: 'Part-Time',
      description: 'We need a creative UX/UI Designer to enhance our web and mobile applications.'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Company D',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Looking for a Data Scientist to analyze data and drive strategic decisions.'
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'Company E',
      location: 'Chicago, IL',
      type: 'Full-Time',
      description: 'Join us as a Product Manager to lead product development and strategy.'
    },
    {
      id: 6,
      title: 'Software Engineer',
      company: 'Company F',
      location: 'Seattle, WA',
      type: 'Part-Time',
      description: 'Seeking a Software Engineer to develop and maintain high-quality software solutions.'
    },
  ];

  return (
     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobListing