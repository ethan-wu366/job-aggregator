import React from "react";
import { useParams, Link } from "react-router-dom";
import "./style/Job.css";

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs[id];

  if (!job) {
    return <div>Job not found :(</div>;
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
      <p>
        <strong>Job Description and Requirements:</strong>
        {job.description}
      </p>
      <a href={job.job_url} className="btn btn-success">
        Apply Here!
      </a>
      <Link to={`/`} className="btn btn-success">
        Back to Jobs
      </Link>
    </div>
  );
};

export default JobDetails;
