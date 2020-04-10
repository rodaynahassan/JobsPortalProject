const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
var ObjectId = mongoose.Schema.Types.ObjectId;

const Cv = new Schema({
    jobSeekerId:{ type: ObjectId, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    address:{type: String, required: false},
    mobileNumber:{type: String, required: false},
    email: { type: String, required: false },
    birthdate: { type: Date, required: false },
    education: { type: String, required: true },
    languages: [[{ type: String, required: true }]],
    communicationSkills: [[{ type: String, required: true }]],
    internships: [[{ type: String, required: true }]],
    workExperience: [[{ type: String, required: true }]],
    studentActivities: [[{ type: String, required: true }]]
});

module.exports = cv = mongoose.model('cvs', Cv);

