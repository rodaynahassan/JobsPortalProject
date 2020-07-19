const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const Employer = new Schema({
    userType:{type:String, default:'employer',required:false},
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    jobRoles:[[{ type: String, required: true }]],
    mobileNumber:{type: String, required: true},
    businessEmail: { type: String, required: true },
    password: { type: String, required: true },
    companyName:{ type: String, required: true },
    companyNumber:{ type: String, required: true },
    companyWebsite: { type: String, required: false },
    country:{type: String, required: true},
    industryOfCompany:[[{ type: String, required: true }]],
    companySize:{ type: String, required: true },    
});

module.exports = employer = mongoose.model('employers', Employer);


