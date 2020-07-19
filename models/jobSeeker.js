const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const JobSeeker = new Schema({
    userType:{type:String, default:'jobSeeker',required:false},
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    gender: { type: String, required: false },
    birthdate: { type: Date, required: true },
    nationality: { type: String, required: true },
    maritalStatus:{type: String, required: false},
    militaryStatus:{type: String, required: false},
    drivingLicense:{type: String, required: false},
    country:{type: String, required: true},
    city:{type: String, required: true},
    address:{type: String, required: true},
    postalCode:{type: String, required: false},
    mobileNumber:{type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    savedJobs:{type: Array, required:false}
});

module.exports = jobSeeker = mongoose.model('jobSeekers', JobSeeker);

