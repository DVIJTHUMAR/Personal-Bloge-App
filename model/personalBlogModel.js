const mongoose = require('mongoose')

const personalAppSchema = new mongoose.Schema({
    title : String,
    content : String
})

const blogModel = mongoose.model("personalBlog",personalAppSchema);

module.exports = blogModel;