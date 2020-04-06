const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: String
})

exports.dataModel = mongoose.model('user', schema)