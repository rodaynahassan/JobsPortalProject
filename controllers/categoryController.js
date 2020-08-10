const mongoose = require('mongoose');
const Category = require('../models/category');
const categoryValidator = require('../validations/categoryValidations')

exports.search=async function search (att,value)
{
    if (!att)
    {
        var categories=await Category.find()
        return categories
    }
    if (att==='id')
    {
        var certainCategory=await Category.findById(value)
        return certainCategory
    }

    if(att ==='categoryName')
    {
    return await Category.find({categoryName:value})
    .then(res => {
      return res;
    })
    .catch(err => {
      return { error: err };
    });
    }
    
    
}

exports.create=async function create(body)
{
    try
    {
        const isCategoryValidated=categoryValidator.createValidation(body)
        if (isCategoryValidated.error) return {error:isCategoryValidated.error.details[0].message}
        const newCategory=await Category.create(body)
        await newCategory.save();
        return newCategory
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
        var isValidated = categoryValidator.updateValidation(body)
        if(isValidated.error) return {error: isValidated.error.details[0].message}
        var updatedCategory = await Category.findByIdAndUpdate(value,body)
        .then(res=>{return res})
        .catch(error=>{
           return {error:error}
       })
       if (updatedCategory.error) return updatedCategory
        var returnedCategory = await Category.findById(value)
        return returnedCategory
    }
    else{
        const  categories = await Category.updateMany({ att: value },body)
        return categories
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
        const  category= await Category.findByIdAndDelete(value)
        return category
    }
    else{
        const  categories = await Category.deleteMany({ att: value })
        return categories
    }
}
