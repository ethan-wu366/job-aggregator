import React from 'react';
import Job from './Job';
//import './JobList.css';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
