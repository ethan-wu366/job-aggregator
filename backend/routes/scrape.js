const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const jobDataFile = path.join(__dirname, "../data/jobs.json");

router.get("/scrape", (req, res) => {
  exec("python3 scrapper.py", (error, stdout, stderr) => {
    if (error) {
      console.error("Error executing script:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    console.log("Script output:", stdout);

    // Parse and save the JSON output for search
    const jsonData = JSON.parse(stdout);
    fs.writeFileSync(jobDataFile, JSON.stringify(jsonData, null, 2));
    res.json(jsonData);
  });
});

module.exports = router;
