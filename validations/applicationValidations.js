const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            applicationType: Joi.string().required(),
            employerId:Joi.string().required(),
            jobId:Joi.string().required(),
            questionOne: Joi.string(),
            questionTwo: Joi.string(),
            questionThree: Joi.string(),
            questionFour: Joi.string(),
            questionFive: Joi.string(),
            questionSix:Joi.string(),
            questionSeven: Joi.string(),
            questionEight: Joi.string(),
            questionNine: Joi.string(),
            questionTen: Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            applicationType: Joi.string(),
            employerId:Joi.string(),
            jobId:Joi.string(),
            questionOne: Joi.string(),
            questionTwo: Joi.string(),
            questionThree: Joi.string(),
            questionFour: Joi.string(),
            questionFive: Joi.string(),
            questionSix:Joi.string(),
            questionSeven: Joi.string(),
            questionEight: Joi.string(),
            questionNine: Joi.string(),
            questionTen: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}