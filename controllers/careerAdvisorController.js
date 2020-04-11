const mongoose = require('mongoose');
const CareerAdvisor = require('../models/careerAdvisor');
const careerAdvisorValidator = require('../validations/careerAdvisorValidations')


exports.search=async function search (att,value)
{
    if (!att)
    {
        var careerAdvisors=await CareerAdvisor.find()
        return careerAdvisors
    }
    if (att==='id')
    {
        var certainCareerAdvisor=await CareerAdvisor.findById(value)
        return certainCareerAdvisor
    }
    
}

exports.create=async function create(body)
{
    try
    {
      const isCareerAdvisorValidated=careerAdvisorValidator.createValidation(body)
      if (isCareerAdvisorValidated.error) return {error:isCareerAdvisorValidated.error.details[0].message}
      const newCareerAdvisor=await CareerAdvisor.create(body)
      await newCareerAdvisor.save();
      return newCareerAdvisor


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
        var isValidated = careerAdvisorValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedCareerAdvisor = await CareerAdvisor.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedCareerAdvisor.error) return updatedCareerAdvisor
        var returnedCareerAdvisor = await CareerAdvisor.findById(value)
        return returnedCareerAdvisor
    }
    else{
        const  careerAdvisors = await CareerAdvisor.updateMany({ att: value },body)
        return careerAdvisors
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
        const  careerAdvisor= await CareerAdvisor.findByIdAndDelete(value)
        return careerAdvisor
    }
    else{
        const  careerAdvisors = await CareerAdvisor.deleteMany({ att: value })
        return careerAdvisors
    }
}





