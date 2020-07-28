const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const Admin = new Schema({
  userType:{type: String,default:"Admin"},
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  gender: { type: String, required: true},
  nationality: { type: String, required: true},
  password: { type: String, required: true },
  email: {type: String,required:true},
  birthdate:{ type: Date, required: true},
  country: { type: String, required: true},
  city: { type: String, required: true},
  address: { type: String, required: true},
  mobileNumber:{ type:String, required:true},
});

module.exports = admin = mongoose.model('admins', Admin);
