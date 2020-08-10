const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
var ObjectId = mongoose.Schema.Types.ObjectId;

const Cv = new Schema({
    type:{type:String,enum: [ 'Public', 'Private', 'Protected'],required:true},
    jobSeekerId:{ type: ObjectId, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    address:{type: String, required: false},
    city:{type: String, required: false},
    country:{type: String, required: false},
    mobileNumber:{type: String, required: false},
    email: { type: String, required: false },
    birthdate: { type: Date, required: false },
    school:{type: String, required: true},
    grade:{type: String, required: true},
    fieldOfStudy:{type: String, required: true},
    startYear:{type: String, required: true},
    endYear:{type: String, required: true},
    // education: { type: String, required: true },
    languages: { type: Array, required: true },
    communicationSkills: { type: Array, required: true },
    internships: { type: Array, required: true },
    workExperience: { type: Array, required: true },
    studentActivities: { type: Array, required: true }
});

module.exports = cv = mongoose.model('cvs', Cv);

