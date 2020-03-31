const mongoose = require('mongoose');
const Job = require('../models/job');
const jobValidator = require('../validations/jobValidations')

exports.search=async function search (att,value)
{
    if (!att)
    {
        var jobs=await Job.find()
        return jobs
    }
    if (att==='id')
    {
        var certainJob=await Job.findById(value)
        return certainJob
    }
    
}

exports.create=async function create(body)
{
    try
    {
      const isJobValidated=jobValidator.createValidation(body)
      if (isJobValidated.error) return {error:isJobValidated.error.details[0].message}
      const newJob=await Job.create(body)
      newJob.totalNumberOfApplicants=0;
      newJob.numberOfViewedApplications=0;
      newJob.numberOfAcceptedApplications=0;
      newJob.numberOfRejectedApplications=0;
      await newJob.save();
      return newJob
    }
    catch (error) 
    {
        console.log(error)
    }
}

exports.update = async function update(att,value,body){
    try{
    // var isValidated = undefined
    
    if(!att){
        return null
    }
    if(att==='id'){
        var isValidated = jobValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedJob = await Job.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedJob.error) return updatedJob
        var returnedJob = await Job.findById(value)
        return returnedJob
    }
    else{
        const  jobs = await Job.updateMany({ att: value },body)
        return jobs
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
        const  job= await Job.findByIdAndDelete(value)
        return job
    }
    else{
        const  jobs = await Job.deleteMany({ att: value })
        return jobs
    }
}
