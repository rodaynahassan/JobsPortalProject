const mongoose = require('mongoose');
const Employer = require('../models/employer');
const employerValidator = require('../validations/employerValidations')

exports.search=async function search (att,value)
{
    if (!att)
    {
        var employers=await Employer.find()
        return employers
    }
    if (att==='id')
    {
        var certainEmployer=await Employer.findById(value)
        return certainEmployer
    }
    
}

exports.create=async function create(body)
{
    try
    {
      const isEmployerValidated=employerValidator.createValidation(body)
      if (isEmployerValidated.error) return {error:isEmployerValidated.error.details[0].message}
      const newEmployer=await Employer.create(body)
      await newEmployer.save();
      return newEmployer

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
        var isValidated = employerValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedEmployer = await Employer.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedEmployer.error) return updatedEmployer
        var returnedEmployer = await Employer.findById(value)
        return returnedEmployer
    }
    else{
        const  employers = await Employer.updateMany({ att: value },body)
        return employers
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
        const  employer= await Employer.findByIdAndDelete(value)
        return employer
    }
    else{
        const  employers = await Employer.deleteMany({ att: value })
        return employers
    }
}


