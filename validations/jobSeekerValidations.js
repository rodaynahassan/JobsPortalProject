const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            firstName: Joi.string().required().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().required().max(50),
            gender: Joi.string().max(6),
            birthdate: Joi.date().required(),
            nationality: Joi.string().required().max(50),
            maritalStatus:Joi.string().max(50),
            militaryStatus: Joi.string().max(50),
            drivingLicense: Joi.string().max(50),
            country: Joi.string().required().max(50),
            city: Joi.string().required().max(50),
            address: Joi.string().required(),
            postalCode: Joi.string(),
            mobileNumber: Joi.string().required().max(50),
            password: Joi.string().min(8).required().max(50),
            email: Joi.string().required().email(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            
            firstName: Joi.string().max(50),
            middleName: Joi.string().max(50),
            lastName: Joi.string().max(50),
            gender: Joi.string().max(6),
            birthdate: Joi.date().required(),
            nationality: Joi.string().max(50),
            maritalStatus:Joi.string().max(50),
            militaryStatus: Joi.string().max(50),
            drivingLicense: Joi.string().max(50),
            country: Joi.string().max(50),
            city: Joi.string().max(50),
            address: Joi.string(),
            postalCode: Joi.string(),
            mobileNumber: Joi.string().max(50),
            password: Joi.string().min(8).max(50),
            email: Joi.string().email()
        }

        return Joi.validate(request, updateSchema)
    }, 
}

