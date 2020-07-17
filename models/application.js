const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
var ObjectId = mongoose.Schema.Types.ObjectId;

const Application = new Schema({
    applicationType: { type: String, enum: ['Default','Customized','Mix'],required:true },
    employerId:{type: ObjectId},
    jobId:{type: ObjectId},
    questionOne: { type: String,required:false},
    minOne:{type:String,required:false},
    maxOne:{type:String,required:false},
    questionTwo: { type: String, required:false},
    minTwo:{type:String,required:false},
    maxTwo:{type:String,required:false},
    questionThree:{ type: String, required: false },
    minThree:{type:String,required:false},
    maxThree:{type:String,required:false},
    questionFour:{type: String, required: false},
    minFour:{type:String,required:false},
    maxFour:{type:String,required:false},
    questionFive: { type: String, required: false },
    minFive:{type:String,required:false},
    maxFive:{type:String,required:false},
    questionSix: { type: String, required: false },
    minSix:{type:String,required:false},
    maxSix:{type:String,required:false},
    questionSeven:{ type: String, required: false },
    minSeven:{type:String,required:false},
    maxSeven:{type:String,required:false},
    questionEight:{ type: String, required: false },
    minEight:{type:String,required:false},
    maxEight:{type:String,required:false},
    questionNine: { type: String, required: false },
    minNine:{type:String,required:false},
    maxNine:{type:String,required:false},
    questionTen:{type: String, required: false},
    minTen:{type:String,required:false},
    maxTen:{type:String,required:false}
});

module.exports = application = mongoose.model('applications', Application);
