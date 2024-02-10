const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        default:"guest"
    },password:{
        type:String,
        required:true,
        default:"123"
    },

},{timestamps:true})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;