const JobListing = require("../models/jobListing");

const createJobListing = async (req, res) => {
  console.log("Request Body:", req.body);

  try {
    const { jobTitle, description, applicationDeadline } = req.body;

    const newJobListing = new JobListing({
      jobTitle,
      description,
      applicationDeadline,
    });

    // Save the job listing
    const savedJobListing = await newJobListing.save();

    // Log the saved job listing
    console.log("Saved Job Listing:", savedJobListing);

    res.status(201).json(savedJobListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJobListing = async (req, res) => {
  try {
    const jobListings = await JobListing.find({}).sort({ createdAt: -1 });
    res.status(200).json(jobListings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteJobListing = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedJobListing = await JobListing.findOneAndDelete({ _id: id });

    if (!deletedJobListing) {
      return res.status(404).json({ error: "No such job listing" });
    }

    res.status(200).json(deletedJobListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateJobListing = async (req, res) => {
  const { id } = req.params;
  console.log(req.bady);

  try {
    const updatedJobListing = await JobListing.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!updatedJobListing) {
      return res.status(404).json({ error: "No such job listing" });
    }

    res.status(200).json(updatedJobListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createJobListing, getJobListing, deleteJobListing, updateJobListing };
