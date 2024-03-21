const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    otp: {type: String, required: false, default: none},
    password: {type: String, required: true},
    verification: {type: Boolean, required: false},
    phone: {type: String, default: "012345678"},
    phoneVerification: {type: String, required: true},
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: false
    },
    userType: { type: String, required: true, default: "Client", enum: ['Client', 'Admin', 'Vendor', 'Driver']},
    profile: {type: String, default: 'https://d326fntlu7tb1e.cloudfront.net/uploads/bdec9d7d-0544-4fc4-823d-3b898f6dbbbf-vinci_03.jpeg'},
    
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);