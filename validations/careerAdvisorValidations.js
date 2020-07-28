const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            firstName: Joi.string().required().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().required().max(50),
            gender: Joi.string().max(6).required(),
            birthdate: Joi.date().required(),
            mobileNumber: Joi.string().required().max(50),
            mobileNumberVisibility: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required(),
            country: Joi.string().required(),
            city:  Joi.string().required(),
            yearsOfExperience: Joi.string().required(),
            previousExperience: Joi.string().required(),
            fieldOfAdvising: Joi.string().required(),
            school: Joi.string().required(),
            fieldOfStudy: Joi.string().required(),
            startYear: Joi.string().required(),
            endYear: Joi.string().required(),
            grade: Joi.string().required(),
            activities: Joi.string(),
            extraInfo: Joi.string(),
            achievements: Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstName: Joi.string().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().max(50),
            gender: Joi.string().max(6),
            birthdate: Joi.date(),
            mobileNumber: Joi.string().max(50),
            mobileNumberVisibility: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string(),
            country: Joi.string(),
            city:  Joi.string(),
            yearsOfExperience: Joi.string(),
            previousExperience: Joi.string(),
            fieldOfAdvising: Joi.string(),
            achievements: Joi.string(),
            school: Joi.string(),
            fieldOfStudy: Joi.string(),
            startYear: Joi.string(),
            endYear: Joi.string(),
            grade: Joi.string(),
            activities: Joi.string(),
            extraInfo: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}

