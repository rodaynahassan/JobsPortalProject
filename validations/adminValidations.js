const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            userType: Joi.string(), 
            firstName: Joi.string().required().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().required().max(50),
            gender: Joi.string().required().max(6),
            nationality: Joi.string().required().max(50),
            password: Joi.string().min(8).required().max(50),
            email: Joi.string().required().email().max(20),
            birthdate: Joi.date().required(),
            address: Joi.string().required().max(50),
            country: Joi.string().required(),
            city: Joi.string().required(),
            email: Joi.string().required().email().max(20),
            mobileNumber: Joi.string().required().max(50),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            
            userType: Joi.string(), 
            firstName: Joi.string().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().max(50),
            gender: Joi.string().max(6),
            nationality: Joi.string().max(50),
            password: Joi.string().min(8).max(50),
            email: Joi.string().email().max(20),
            birthdate: Joi.date(),
            address: Joi.string().max(50),
            country: Joi.string(),
            city: Joi.string(),
            email: Joi.string().email().max(20),
            mobileNumber: Joi.string().max(50),
        }

        return Joi.validate(request, updateSchema)
    }, 
}