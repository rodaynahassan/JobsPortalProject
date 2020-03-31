const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
var ObjectId = mongoose.Schema.Types.ObjectId;

const UserApplication = new Schema({
    userID:{ type: ObjectId, required: true },
    applicationID: { type: ObjectId, required: true },
    answerOne:{type: String, required: false},
    answerTwo: { type: String, required: false },
    answerThree: { type: String, required: false },
    answerFour: { type: String, required: false },
    answerFive: { type: String, required: false },
    answerSix: { type: String, required: false },
    answerSeven:{type: String, required: false},
    answerEight:{type: String, required: false},
    answerNine:{type: String, required: false},
    answerTen:{type: String, required: false}
});

module.exports = userApplication = mongoose.model('userApplications', UserApplication);

