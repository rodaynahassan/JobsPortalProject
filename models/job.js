const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
var ObjectId = mongoose.Schema.Types.ObjectId;

const Job = new Schema({
    empoyerId:{ type: ObjectId, required: true },
    category: { type: String, required: true },
    jobType:{type: String, enum: [ 'Part Time', 'Full time', 'Internship', 'Work from home','Freelancing']},
    experienceNeeded: { type: String, required: true },
    careerLevel: { type: String, required: true },
    jobTitle: { type: String, required: true },
    salary: { type: String, required: true },
    languages: [[{ type: String, required: true }]],
    vacancies:{type: String, required: true},
    jobDescription:{type: String, required: true},
    jobRequirements:{type: String, required: false},
    country:{type: String, required: false},
    city:{type: String, required: false},
    totalNumberOfApplicants:{ type: Number, required: false },
    appliedApplicants:[[{ type: ObjectId, required: false }]],
    numberOfViewedApplications:{ type: Number, required: false },
    viewedApplicants:[[{ type: ObjectId, required: false }]],
    numberOfAcceptedApplications:{ type: Number, required: false },
    acceptedApplicants:[[{ type: ObjectId, required: false }]],
    numberOfRejectedApplications:{ type: Number, required: false },
    rejectedApplicants:[[{ type: ObjectId, required: false }]],
    startDate:{ type: Date, required: false },
    duration:{ type: String, required: false },
    applicationDeadline:{ type: String, required: false },
});

module.exports = job = mongoose.model('jobs', Job);








