const mongoose = require('mongoose');
const JobSeeker = require('../models/jobSeeker');
const jobSeekerValidator = require('../validations/jobSeekerValidations')

exports.search=async function search (att,value)
{
    if (!att)
    {
        var jobSeekers=await JobSeeker.find()
        return jobSeekers
    }
    if (att==='id')
    {
        var certainJobSeeker=await JobSeeker.findById(value)
        return certainJobSeeker
    }
    
}

exports.create=async function create(body)
{
    try
    {
      const isJobSeekerValidated=jobSeekerValidator.createValidation(body)
      if (isJobSeekerValidated.error) return {error:isjobSeekerValidated.error.details[0].message}
      const newJobSeeker=await JobSeeker.create(body)
      await newJobSeeker.save();
      return newJobSeeker

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
        var isValidated = jobSeekerValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedJobSeeker = await JobSeeker.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedJobSeeker.error) return updatedJobSeeker
        var returnedJobSeeker = await JobSeeker.findById(value)
        return returnedJobSeeker
    }
    else{
        const  jobSeekers = await JobSeeker.updateMany({ att: value },body)
        return jobSeekers
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
        const  jobSeeker= await JobSeeker.findByIdAndDelete(value)
        return jobSeeker
    }
    else{
        const  jobSeekers = await JobSeeker.deleteMany({ att: value })
        return jobSeekers
    }
}


