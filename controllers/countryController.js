const mongoose = require('mongoose');
const Country = require('../models/country');



exports.search=async function search (att,value)
{
    if (!att)
    {
        var countries=await Country.find()
        return countries
    }
    if (att==='name')
    {
        var certainCountry=await Country.find({'name':value})
        return certainCountry[0]
    }
 
}