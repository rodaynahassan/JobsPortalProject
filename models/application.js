const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
var ObjectId = mongoose.Schema.Types.ObjectId;

const Application = new Schema({
    applicationType: { type: String, enum: ['Default','Customized','Mix'],required:true },
    employerId:{type: ObjectId, required: true},
    jobId:{type: ObjectId, required: true},
    questionOne: { type: String, default: 'What do you think you will gain from this job ?' },
    questionTwo: { type: String, default: 'What makes you special to be aceepted ?' },
    questionThree:{ type: String, required: false },
    questionFour:{type: String, required: false},
    questionFive: { type: String, required: false },
    questionSix: { type: String, required: false },
    questionSeven:{ type: String, required: false },
    questionEight:{ type: String, required: false },
    questionNine: { type: String, required: false },
    questionTen:{type: String, required: false}
});

module.exports = application = mongoose.model('applications', Application);
