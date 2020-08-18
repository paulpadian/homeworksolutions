const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    },
    roles: {
        type: String,
    }
});

const User = mongoose.model("user", UserSchema);


module.exports = User;
