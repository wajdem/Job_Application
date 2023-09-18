import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardJop = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    axios.get('/api/jop/all-job-listings')
      .then(response => {
        setJobListings(response.data);
      })
      .catch(error => {
        console.error('Error fetching job listings:', error);
      });
  }, []);
  
  const handleCardPress = (jobTitle) => {
    // Handle navigation or any other logic here
  }

  return (
    <div className="container">
      {jobListings.map((job, index) => (
        <div className="card" key={index} onClick={() => handleCardPress(job.jobTitle)}>
          <div className="cardContent">
            <h2 className="jobTitle">{job.jobTitle}</h2>
            <p className="description">{job.description}</p>
            <p className="description">{job.applicationDeadline}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardJop;
