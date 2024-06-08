import React, { useState } from "react";
import axios from "axios";
import JobList from "./Joblist";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    console.log("Search Key: ", search);
    // Check if search bar is empty
    const isEmpty = search.trim() === "";
    try {
      const response = await axios.get("http://localhost:3000/search", {
        params: { search },
      });
      console.log("Search Results: ", response.data);
      setJobs(response.data);
    } catch (err) {
      console.error(err);
    }
    onSearch(isEmpty, jobs);
  };

  return (
    <div>
      <h1>Job Search</h1>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Search;
