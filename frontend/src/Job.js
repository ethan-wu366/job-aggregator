import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./style/Job.css";

const Job = ({ index, job }) => {

  //ensure each job has a unique id
  const { id } = useParams();

  //TODO: Add hover over card effect
  return (
    <div className="job-item">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title cardText titleText">{job.title}</h5>
          <h5 className="cardText infoText">{job.company}</h5>
          <h5 className="cardText infoText">{job.location}</h5>
          <h3 className="cardText payText">
            ${job.min_amount}-{job.max_amount}/hour
          </h3>
          <h3>{id}</h3>
          <Link to={`/job/${index}`} className="btn btn-primary">
            More Info
          </Link>
        </div>
      </div>
      <p>{job.description}</p>
    </div>
  );
};

export default Job;
