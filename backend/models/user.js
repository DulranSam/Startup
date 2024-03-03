const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: "guest"
    },
    password: {
        type: String,
        required: true,
        default: "123"
    },
    userHistory: {
        type: Array,
        default: []
    },
    By: {
        type: String,
        default: "guest"
    }
}, { timestamps: true });

userSchema.pre('save', function(next) {
    if (this.isNew && this.session && this.session.user && this.session.user.username) {
        this.By = this.session.user.username;
    }
    next();
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
