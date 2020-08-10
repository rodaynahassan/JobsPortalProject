const mongoose = require('mongoose');
const Job = require('../models/job');
const jobValidator = require('../validations/jobValidations')
const Employer = require('../models/employer');

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

    if(att ==='employerId')
    {
    return await Job.find({employerId:value})
    .then(res => {
      return res;
    })
    .catch(err => {
      return { error: err };
    });
    }
    
}

exports.create=async function create(body,employerId)
{
    try
    {

      const employer= await Employer.findById(employerId)
      const company=employer.companyName
      const isJobValidated=jobValidator.createValidation(body)
      if (isJobValidated.error) return {error:isJobValidated.error.details[0].message}
      body.totalNumberOfApplicants=0;
      body.numberOfViewedApplications=0;
      body.numberOfAcceptedApplications=0;
      body.numberOfRejectedApplications=0;
      const date=new Date();
      body.datePosted= date;
      body.companyName=company;
      body.employerId=employerId
      const newJob= await Job.create(body)
      await newJob.save()
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
