import React from "react";
import Job from "./Job";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <Job key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
