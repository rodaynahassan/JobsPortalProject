const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            type: Joi.string().required(),
            jobSeekerId: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            address: Joi.string(),
            city: Joi.string(),
            country: Joi.string(),
            mobileNumber: Joi.string(),
            email: Joi.string(),
            birthdate: Joi.date(),
            // education:Joi.string(),
            school: Joi.string().required(),
            grade: Joi.string().required(),
            fieldOfStudy: Joi.string().required(),
            startYear: Joi.string().required(),
            endYear: Joi.string().required(),
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
            type: Joi.string(),
            jobSeekerId: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            address: Joi.string(),
            city: Joi.string(),
            country: Joi.string(),
            mobileNumber: Joi.string(),
            email: Joi.string(),
            birthdate: Joi.date(),
            // education:Joi.string(),
            school: Joi.string(),
            grade: Joi.string(),
            fieldOfStudy: Joi.string(),
            startYear: Joi.string(),
            endYear: Joi.string(),
            languages: Joi.array(),
            communicationSkills: Joi.array(),
            internships: Joi.array(),
            workExperience: Joi.array(),
            studentActivities: Joi.array()
        }

        return Joi.validate(request, updateSchema)
    }, 
}

