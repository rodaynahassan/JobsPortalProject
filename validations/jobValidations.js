const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = { 
            employerId: Joi.string(),
            category: Joi.string().required(),
            jobType: Joi.string().required(),
            experienceNeeded: Joi.string(),
            careerLevel: Joi.string().required(),
            jobTitle: Joi.string().required(),
            salary:Joi.string().max(50).required(),
            languages: Joi.array().required(),
            vacancies: Joi.string().required(),
            jobDescription: Joi.string().required(),
            jobRequirements: Joi.string(),
            country: Joi.string().required(),
            city: Joi.string().required(),
            totalNumberOfApplicants: Joi.number(),
            appliedApplicants:Joi.array(),
            numberOfViewedApplications:Joi.number(),
            viewedApplicants:Joi.array(),
            numberOfAcceptedApplications:Joi.number(),
            acceptedApplicants:Joi.array(),
            numberOfRejectedApplications:Joi.number(),
            rejectedApplicants:Joi.array(),
            startDate:Joi.string(),
            duration:Joi.string(),
            applicationDeadline:Joi.string(),
            dataPosted:Joi.string()
            }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            employerId: Joi.string(),
            category: Joi.string(),
            jobType: Joi.string(),
            experienceNeeded: Joi.string(),
            careerLevel: Joi.string(),
            jobTitle: Joi.string(),
            salary:Joi.string().max(50),
            languages: Joi.array(),
            vacancies: Joi.string(),
            jobDescription: Joi.string(),
            jobRequirements: Joi.string(),
            country: Joi.string(),
            city: Joi.string(),
            totalNumberOfApplicants: Joi.string(),
            appliedApplicants:Joi.array(),
            numberOfViewedApplications:Joi.string(),
            viewedApplicants:Joi.array(),
            numberOfAcceptedApplications:Joi.string(),
            acceptedApplicants:Joi.array(),
            numberOfRejectedApplications:Joi.string(),
            rejectedApplicants:Joi.array(),
            startDate:Joi.string(),
            duration:Joi.string(),
            applicationDeadline:Joi.string()
            }

        return Joi.validate(request, updateSchema)
    }, 
}


