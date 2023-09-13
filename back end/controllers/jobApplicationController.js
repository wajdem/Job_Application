const JobApplication = require('../models/jobApplication');

const submitJobApplication = async (req, res) => {
  const {
    jobListingId,
    name,
    address,
    gender,
    age,
    contactInfo,
    experience,
    education,
    cvPath,
    additionalInfo,
  } = req.body;

  try {
    const newJobApplication = new JobApplication({
      jobListingId,
      name,
      address,
      gender,
      age,
      contactInfo,
      experience,
      education,
      cvPath,
      additionalInfo,
    });

    await newJobApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitJobApplication };
