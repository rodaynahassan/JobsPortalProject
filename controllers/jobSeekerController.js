const mongoose = require('mongoose');
const Application = require('../models/application');
const applicationValidator = require('../validations/applicationValidations')

exports.search=async function search (att,value)
{
    if (!att)
    {
        var applications=await Application.find()
        return applications
    }
    if (att==='id')
    {
        var certainApplication=await Application.findById(value)
        return certainApplication
    }
    
}

exports.create=async function create(body)
{
    try
    {
      const isApplicationValidated=applicationValidator.createValidation(body)
      if (isApplicationValidated.error) return {error:isApplicationValidated.error.details[0].message}
      const newApplication=await Application.create(body)
      await newApplication.save();
      return newApplication

    }
    catch (error) 
    {
        console.log(error)
    }
}

exports.update = async function update(att,value,body)
{
    try
    {
    if(!att){
        return null
    }
    if(att==='id'){
        var isValidated = applicationValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedApplication = await Application.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedApplication.error) return updatedApplication
        var returnedApplication = await Application.findById(value)
        return returnedApplication
    }
    else{
        const  applications = await Application.updateMany({ att: value },body)
        return applications
    }
}
    catch(error){
        console.log(error)
    }
}

exports.remove = async function remove(att,value){
    if(!att){
        return null
    }
    if(att==='id'){
        const  application= await Application.findByIdAndDelete(value)
        return application
    }
    else{
        const  applications = await Application.deleteMany({ att: value })
        return applications
    }
}


