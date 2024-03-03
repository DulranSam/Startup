const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:""
    },
    description:{
       type:Array,
       default:[] 
    },
    Priority:{
        type:Number,
        default:0,
    },

},{timestamps:true})

const taskModel = mongoose.model("tasks",taskSchema);
module.exports = taskModel;