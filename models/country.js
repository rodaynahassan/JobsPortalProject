const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Country = new Schema({
    name: {type:String,required:true},
    cities:{type:Array}
    });



module.exports = country = mongoose.model('countries', Country)