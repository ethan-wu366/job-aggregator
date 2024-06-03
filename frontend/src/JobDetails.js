import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs[id];

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Pay Rate:</strong> {job.min_amount} - {job.max_amount}{" "}
        {job.currency}
      </p>
      <p>{job.description}</p>
      <p>{job.job_url}</p>
    </div>
  );
};

export default JobDetails;
