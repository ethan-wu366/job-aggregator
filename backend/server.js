const express = require("express");
const app = express();
const port = 3000;

// Use cors for cross-origin requests (required)
const cors = require("cors");
app.use(cors());

// Import the routes
const scrapeRoutes = require("./routes/scrape");
const searchRoutes = require("./routes/search");

// Use the routes
app.use("/", scrapeRoutes);
app.use("/", searchRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
