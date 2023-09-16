const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobListingSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    applicationDeadline: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("JobListing", jobListingSchema);
