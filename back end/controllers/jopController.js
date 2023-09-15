const Job = require("../models/jopModel");
const mongoose = require("mongoose");

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJob = async (req, res) => {
  console.log("Request Body:", req.body);
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Job" });
  }

  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({ error: "No such Job" });
  }

  res.status(200).json(job);
};

const createJob = async (req, res) => {
  console.log("Request Body:", req.body);
  const {
    name,
    address,
    gender,
    age,
    contactInformation,
    yearsOfExperience,
    educationInformation,
    cv,
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
      cv,
      additionalInformation,
    });
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job" });
  }

  const job = await Job.findOneAndDelete({ _id: id });

  if (!job) {
    return res.status(400).json({ error: "No such job" });
  }

  res.status(200).json(job);
};

const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job" });
  }

  const job = await Job.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!job) {
    return res.status(400).json({ error: "No such job" });
  }

  res.status(200).json(job);
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
