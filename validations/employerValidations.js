const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            firstName: Joi.string().required().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().required().max(50),
            jobRoles: Joi.array().required(),
            mobileNumber: Joi.string().required().max(50),
            businessEmail: Joi.string().required().email().max(20),
            password: Joi.string().min(8).required().max(50),
            companyName:Joi.string().required().max(50),
            companyNumber:Joi.string().required().max(50),
            companyWebsite:Joi.string().max(50),
            country: Joi.string().required().max(50),
            industryOfCompany: Joi.array().required(),
            companySize:Joi.string().required()
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstName: Joi.string().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().max(50),
            jobRoles: Joi.array(),
            mobileNumber: Joi.string().max(50),
            businessEmail: Joi.string().email().max(20),
            password: Joi.string().min(8).max(50),
            companyName:Joi.string().max(50),
            companyNumber:Joi.string().max(50),
            companyWebsite:Joi.string().max(50),
            country: Joi.string().max(50),
            industryOfCompany: Joi.array(),
            companySize:Joi.string()
        }
        return Joi.validate(request, updateSchema)
    }, 
}

