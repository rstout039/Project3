const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    jobTitle: { type: String, required: true },
    requirements: { type: String, required: true },
    description: String,
    completionTarget: { type: Date, default: Date.now}
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;