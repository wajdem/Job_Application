const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  jobListingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing',
  },
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  gender: String,
  age: Number,
  contactInfo: {
    phone: String,
    email: String,
  },
  experience: Number,
  education: String,
  cvPath: String,
  additionalInfo: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
