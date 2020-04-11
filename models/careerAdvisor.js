const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const CareerAdvisor = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    birthdate: { type: Date, required: true },
    mobileNumber:{type: String, required: false},
    mobileNumberVisibility:{type: String, enum: ['Private','Public'], required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    country:{type: String, required: true},
    city: {type: String, required: false},
    yearsOfExperience: {type: Number, required: true},
    previousExperience: {type: String, required: true},
    fieldOfAdvising: {type: String, required: true},
    achievements: {type: String, required: false},
    school:{type: String, required: true},
    degree:{type: String, required: true},
    fieldOfStudy:{type: String, required: true},
    startYear:{type: String, required: true},
    endYear:{type: String, required: true},
    grade:{type: String, required: false},
    activities:{type: String, required: false},
    extraInfo:{type: String, required: false}
});

module.exports = careerAdvisor = mongoose.model('careerAdvisors', CareerAdvisor);

