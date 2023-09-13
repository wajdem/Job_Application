const JobListing = require('../models/jobListing');

const getAllJobListings = async (req, res) => {
  try {
    const jobListings = await JobListing.find();
    res.json(jobListings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllJobListings };
