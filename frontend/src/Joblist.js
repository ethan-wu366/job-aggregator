import React from "react";
import Job from "./Job";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <Job key={index} job={job} index={index} />
      ))}
    </div>
  );
};

export default JobList;
