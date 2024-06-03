import React from 'react';
import './style/Job.css';

const Job= ({ job }) => {
  return (
    <div className="job-item">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Pay Rate:</strong> {job.min_amount} - {job.max_amount} {job.currency}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default Job;
