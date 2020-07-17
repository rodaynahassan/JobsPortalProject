const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
var ObjectId = mongoose.Schema.Types.ObjectId;

const Job = new Schema({
    employerId:{ type: ObjectId},
    companyName:{type:String,required:false},
    category: { type: String, required: true },
    jobType:{type: String, enum: [ 'Part time', 'Full time', 'Internship', 'Work from home','Freelancing'],required:true},
    experienceNeeded: { type: String, required: false },
    careerLevel: { type: String, required: true,enum: [ 'Student', 'Fresh graduate', 'Experienced', 'Executive/Supervisor','Senior Manager'] },
    jobTitle: { type: String, required: true },
    salary: { type: String, required: true },
    languages:{ type: Array, required: true },
    vacancies:{type: String, required: true},
    jobDescription:{type: String, required: true},
    jobRequirements:{type: String, required: false},
    country:{type: String, required: true},
    city:{type: String, required: true},
    totalNumberOfApplicants:{ type: Number, required: false },
    appliedApplicants:{ type: Array, required: false },
    numberOfViewedApplications:{ type: Number, required: false },
    viewedApplicants:{ type: Array, required: false },
    numberOfAcceptedApplications:{ type: Number, required: false },
    acceptedApplicants:{ type: Array, required: false },
    numberOfRejectedApplications:{ type: Number, required: false },
    rejectedApplicants:{ type: Array, required: false },
    startDate:{ type: String, required: false },
    duration:{ type: String, required: false },
    applicationDeadline:{ type: String, required: false },
    datePosted:{ type: String, required: false }
});

module.exports = job = mongoose.model('jobs', Job);








