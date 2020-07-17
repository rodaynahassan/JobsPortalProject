const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            applicationType: Joi.string().required(),
            employerId:Joi.string(),
            jobId:Joi.string(),
            questionOne: Joi.string(),
            minOne: Joi.string(),
            maxOne: Joi.string(),
            questionTwo: Joi.string(),
            minTwo: Joi.string(),
            maxTwo: Joi.string(),
            questionThree: Joi.string(),
            minThree: Joi.string(),
            maxThree: Joi.string(),
            questionFour: Joi.string(),
            minFour: Joi.string(),
            maxFour: Joi.string(),
            questionFive: Joi.string(),
            minFive: Joi.string(),
            maxFive: Joi.string(),
            questionSix:Joi.string(),
            minSix: Joi.string(),
            maxSix: Joi.string(),
            questionSeven: Joi.string(),
            minSeven: Joi.string(),
            maxSeven: Joi.string(),
            questionEight: Joi.string(),
            minEight: Joi.string(),
            maxEight: Joi.string(),
            questionNine: Joi.string(),
            minNine: Joi.string(),
            maxNine: Joi.string(),
            questionTen: Joi.string(),
            minTen: Joi.string(),
            maxTen: Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            applicationType: Joi.string(),
            employerId:Joi.string(),
            jobId:Joi.string(),
            questionOne: Joi.string(),
            minOne: Joi.string(),
            maxOne: Joi.string(),
            questionTwo: Joi.string(),
            minTwo: Joi.string(),
            maxTwo: Joi.string(),
            questionThree: Joi.string(),
            minThree: Joi.string(),
            maxThree: Joi.string(),
            questionFour: Joi.string(),
            minFour: Joi.string(),
            maxFour: Joi.string(),
            questionFive: Joi.string(),
            minFive: Joi.string(),
            maxFive: Joi.string(),
            questionSix:Joi.string(),
            minSix: Joi.string(),
            maxSix: Joi.string(),
            questionSeven: Joi.string(),
            minSeven: Joi.string(),
            maxSeven: Joi.string(),
            questionEight: Joi.string(),
            minEight: Joi.string(),
            maxEight: Joi.string(),
            questionNine: Joi.string(),
            minNine: Joi.string(),
            maxNine: Joi.string(),
            questionTen: Joi.string(),
            minTen: Joi.string(),
            maxTen: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}