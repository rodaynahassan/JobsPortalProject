const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            userID: Joi.string().required(),
            applicationID: Joi.string().required(),
            answerOne: Joi.string(),
            answerTwo: Joi.string(),
            answerThree: Joi.string(),
            answerFour: Joi.string(),
            answerFive:Joi.string(),
            answerSix: Joi.string(),
            answerSeven: Joi.string(),
            answerEight: Joi.string(),
            answerNine: Joi.string(),
            answerTen: Joi.string(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            userID: Joi.string(),
            applicationID: Joi.string(),
            answerOne: Joi.string(),
            answerTwo: Joi.string(),
            answerThree: Joi.string(),
            answerFour: Joi.string(),
            answerFive:Joi.string(),
            answerSix: Joi.string(),
            answerSeven: Joi.string(),
            answerEight: Joi.string(),
            answerNine: Joi.string(),
            answerTen: Joi.string(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
