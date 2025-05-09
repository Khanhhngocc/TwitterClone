const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true},
    password: { type: String, required: true},
    profilePic: { type: String, default: "/images/profilePic.jpg"}
}, { timestamps: true });

const User = mongoose.model('User', UserSchema, "user");

module.exports = User;