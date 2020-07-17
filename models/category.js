const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');


const Category = new Schema({
    categoryName: { type: String, required: true },
});

module.exports = category = mongoose.model('categories', Category);

