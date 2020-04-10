const mongoose = require('mongoose');
const UserApplication = require('../models/userApplication');
const userApplicationValidator = require('../validations/userApplicationValidations')

exports.search=async function search (att,value)
{
    if (!att)
    {
        var userApplications=await UserApplication.find()
        return jobs
    }
    if (att==='id')
    {
        var certainUserApplication=await UserApplication.findById(value)
        return certainUserApplication
    }
    
}

exports.create=async function create(body)
{
    try
    {
      const isUserApplicationValidated=userApplicationValidator.createValidation(body)
      if (isUserApplicationValidated.error) return {error:isUserApplicationValidated.error.details[0].message}
      const newUserApplication=await UserApplication.create(body)
      await newUserApplication.save();
      return newUserApplication

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
        var isValidated = userApplicationValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedUserApplication = await UserApplication.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedUserApplication.error) return updatedUserApplication
        var returnedUserApplication = await UserApplication.findById(value)
        return returnedUserApplication
    }
    else{
        const  userApplications = await UserApplication.updateMany({ att: value },body)
        return userApplications
    }
}
    catch(error){
        console.log(error)
    }
}
exports.remove = async function remove(att,value)
{
    if(!att){
        return null
    }
    if(att==='id'){
        const  userApplication= await UserApplication.findByIdAndDelete(value)
        return userApplication
    }
    else{
        const  userApplications = await Job.deleteMany({ att: value })
        return userApplications
    }
}
