const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const jobDataFile = path.join(__dirname, "../data/jobs.json");

// Search jobs by any field
router.get("/search", (req, res) => {
  const { search } = req.query;
  let jobs = [];

  try {
    const fileContent = fs.readFileSync(jobDataFile, "utf-8");
    jobs = JSON.parse(fileContent);
  } catch (err) {
    return res.status(500).json({ error: "Could not read job data file" });
  }

  if (search) {
    const searchRegex = new RegExp(search, "i");
    jobs = jobs.filter(
      (job) =>
        searchRegex.test(job.title) ||
        searchRegex.test(job.company) ||
        searchRegex.test(job.location) ||
        searchRegex.test(job.description),
    );
  }

  res.json(jobs);
});

module.exports = router;
