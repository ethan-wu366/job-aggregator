# <span>&#128046;<span> Caregiver Job Listing Aggregator
This webapp displays the top caregiver job listings scraped from Indeed!
Based off https://www.vivian.com/cna/.
#	<span>&#128295;<span> Technology and Tools
![](https://img.shields.io/badge/Frontend-React-informational?style=flat&logo=React&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Backend-Express-informational?style=flat&logo=JavaScript&logoColor=white&color=2bbc8a)

Contents
========


* [Why?](#why)
* [Dependencies](#installation)
* [Usage](#usage)
* [How it works!](#how-it-works)
* [Optional](#optional)

### Why

The demanding role of a caregiver is hard enough, job searching shouldn't add to that stress! This tool will help streamline the caregiver's job search experience and offers real-time updates.

### Dependencies

- Python 3.10 or 3.11, NOT 3.12 
- [`JobSpy`](https://github.com/Bunsly/JobSpy?tab=readme-ov-file)
- Pandas
- Requests
- Node.js
- React.js
- Axios
- 


### Usage

1. Start backend server: 
    * cd backend
    * run 'node server.js', which should return "Server is running on http://localhost:3000"

2. Start frontend app:
    * cd frontend
    * run 'npm start'
    * If asked to run the app on another port instead, please say yes
    * The app should be running on your localhost!

### How it works!

The backend uses JobSpy to scrape job listing information from Indeed. 

### Optional

* Prettier code formatting: run 'npx prettier . --write'


