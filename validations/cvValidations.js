const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            jobSeekerId: Joi.string().required(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            address: Joi.string(),
            mobileNumber: Joi.string(),
            email: Joi.string(),
            birthdate: Joi.date(),
            education:Joi.string(),
            languages: Joi.array().required(),
            communicationSkills: Joi.array().required(),
            internships: Joi.array().required(),
            workExperience: Joi.array().required(),
            studentActivities: Joi.array().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            jobSeekerId: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            address: Joi.string(),
            mobileNumber: Joi.string(),
            email: Joi.string(),
            birthdate: Joi.date(),
            education:Joi.string(),
            languages: Joi.array(),
            communicationSkills: Joi.array(),
            internships: Joi.array(),
            workExperience: Joi.array(),
            studentActivities: Joi.array()
        }

        return Joi.validate(request, updateSchema)
    }, 
}

