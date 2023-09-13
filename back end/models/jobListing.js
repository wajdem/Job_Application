const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
  jobTitle: String,
  description: String,
  applicationDeadline: Date,
});

module.exports = mongoose.model('JobListing', jobListingSchema);
