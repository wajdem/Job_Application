const Job = require("../models/jopModel");
// const mongoose = require("mongoose");

const getJobs = async (req, res) => {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.status(200).json(jobs);
};

const createJob = async (req, res) => {
  console.log(req.body);
  const {
    name,
    address,
    gender,
    age,
    contactInformation,
    yearsOfExperience,
    educationInformation,
    // cv,
    additionalInformation,
  } = req.body;

  try {
    const job = await Job.create({
      name,
      address,
      gender,
      age,
      contactInformation,
      yearsOfExperience,
      educationInformation,
      // cv,
      additionalInformation,
    });
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getJobs,
  createJob,
};
