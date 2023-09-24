const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contactInformation: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    educationInformation: {
        type: String,
        required: true
    },
    additionalInformation: {
        type: String,
        required: false
    }
})
// }, { timestamps: true });

module.exports = mongoose.model("jop", jobSchema);
