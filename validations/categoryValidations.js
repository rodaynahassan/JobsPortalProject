const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            categoryName: Joi.string().required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            categoryName: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}

