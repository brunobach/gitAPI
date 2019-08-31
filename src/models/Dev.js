const {Schema, model} = require('mongoose')

const DevSchema = new Schema({
    login: {
        type: String,
        required: false
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: false
    },
    

}, {timestamps: true,})

module.exports = model('Dev', DevSchema)
