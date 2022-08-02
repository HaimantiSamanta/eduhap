const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    standard:{
            type: String,
            required: true
    },
    board:{
        type: String,
        required: true    
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    regverify:{
    type:Number,
    default:0
    }

});

module.exports = mongoose.model('usermaster', userSchema, 'usermasters');
