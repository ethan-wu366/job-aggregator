import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./Joblist";
import JobDetails from "./JobDetails";
import Search from "./Search";
import "./style/App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searched, setSearched] = useState(false); // Boolean to track if search was initiated

  const fetchJobs = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/scrape?page=${page}&limit=10`,
      );
      console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return [];
    }
  };

  const fetchMoreJobs = async () => {
    const newJobs = await fetchJobs(page);
    setJobs((prevJobs) => [...prevJobs, ...newJobs]);
    setPage((prevPage) => prevPage + 1);

    if (newJobs.length === 0) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMoreJobs();
  }, []);

  const handleSearch = (isEmpty, searchResults) => {
    setSearched(!isEmpty);
    // If search active, only show search results
    if (!isEmpty) {
      setJobs(searchResults);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/job/:id" element={<JobDetails jobs={jobs} />} />
          <Route
            exact
            path="/"
            element={
              <>
                <h1>Caregiver Job Listings</h1>
                <Search onSearch={handleSearch} />
                {!searched && (
                  <InfiniteScroll
                    dataLength={jobs.length}
                    next={fetchMoreJobs}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={<p>Here are all the jobs!</p>}
                  >
                    <div>
                      <JobList jobs={jobs} />
                    </div>
                  </InfiniteScroll>
                )}
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
