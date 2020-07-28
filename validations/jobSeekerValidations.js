const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            userType:Joi.string(),
            firstName: Joi.string().required().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().required().max(50),
            gender: Joi.string().required().max(6),
            birthdate: Joi.date().required(),
            nationality: Joi.string().required().max(50),
            maritalStatus:Joi.string().required().max(50),
            militaryStatus: Joi.string().required().max(50),
            drivingLicense: Joi.string().required().max(50),
            country: Joi.string().required().max(50),
            city: Joi.string().required().max(50),
            address: Joi.string().required(),
            postalCode: Joi.string(),
            mobileNumber: Joi.string().required().max(50),
            password: Joi.string().min(8).required().max(20),
            email: Joi.string().required().email(),
            savedJobs: Joi.array()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            userType:Joi.string(),
            firstName: Joi.string().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().max(50),
            gender: Joi.string().max(6),
            birthdate: Joi.date(),
            nationality: Joi.string().max(50),
            maritalStatus:Joi.string().max(50),
            militaryStatus: Joi.string().max(50),
            drivingLicense: Joi.string().max(50),
            country: Joi.string().max(50),
            city: Joi.string().max(50),
            address: Joi.string(),
            postalCode: Joi.string(),
            mobileNumber: Joi.string().max(50),
            password: Joi.string().min(8).max(20),
            email: Joi.string().email(),
            savedJobs: Joi.array()
        }

        return Joi.validate(request, updateSchema)
    }, 
}

