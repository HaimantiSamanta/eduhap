const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginViaOtpSchema = new Schema({
    
    mobilenumber: {
        type: Number,
        required: true
    },
    otp:{
        type: Number,
        required: true
    },
    otpverify:String
    
})

module.exports = mongoose.model('otpmaster', loginViaOtpSchema, 'otpmasters');