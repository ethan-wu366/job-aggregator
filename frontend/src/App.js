import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './Joblist';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/scrape')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className="App">
      <h1>Caregiver Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;