const express = require("express");
const router = express.Router();
// const requireAuth = require("../middleware/requireAuth");

// router.use(requireAuth);


const {  
  getJobs,
  createJob
} = require("../controllers/jopController")
const {
  createJobListing,
  getJobListing,
  deleteJobListing,
  updateJobListing,
} = require("../controllers/jobListingController");

// Create a new job listing
router.post("/job-listings", createJobListing);

// Get all job listings
router.get("/all-job-listings", getJobListing);

// Delete a job listing by ID
router.delete("/job-listings/:id", deleteJobListing);

// Update a job listing by ID
router.patch("/job-listings/:id", updateJobListing);

// GET all jobs
router.get("/jops", getJobs);

// POST a new job
router.post("/newjop", createJob);

module.exports = router;