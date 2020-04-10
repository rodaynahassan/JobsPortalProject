const mongoose = require('mongoose');
const Cv = require('../models/cv');
const JobSeeker = require('../models/jobSeeker');
const cvValidator = require('../validations/cvValidations')

exports.search=async function search (att,value)
{
    if (!att)
    {
        var cvs=await Cv.find()
        return cvs
    }
    if (att==='id')
    {
        var certainCv=await Cv.findById(value)
        return certainCv
    }
    
}

exports.create=async function create(body)
{
    try
    {
      const isCvValidated=cvValidator.createValidation(body)
      if (isCvValidated.error) return {error:isCvValidated.error.details[0].message}
      const newCv=await Cv.create(body)
      await newCv.save();
      const jobSeeker= await JobSeeker.findById(newCv.jobSeekerId)
      newCv.firstName=jobSeeker.firstName;
      newCv.lastName=jobSeeker.lastName;
      newCv.address=jobSeeker.address + "-" + jobSeeker.city + "-" + jobSeeker.address;
      newCv.mobileNumber=jobSeeker.mobileNumber;
      newCv.email=jobSeeker.email;
      newCv.birthdate=jobSeeker.birthdate;
      await newCv.save();
      return newCv
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
        var isValidated = cvValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedCv = await Cv.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedCv.error) return updatedCv
        var returnedCv = await Cv.findById(value)
        return returnedCv
    }
    else{
        const  cvs = await Cv.updateMany({ att: value },body)
        return cvs
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
        const  cv= await Cv.findByIdAndDelete(value)
        return cv
    }
    else{
        const  cvs = await Cv.deleteMany({ att: value })
        return cvs
    }
}
