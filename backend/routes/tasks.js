const express = require("express");
const router = express.Router();
const taskModel = require("../models/tasks")

router.rotue("/").get(async (req,res)=>{
    try{
        const data = await taskModel.find(); 
        if(data && data.length){
            res.status(200).json(data);
        }else{
            res.status(404).json({Alert:"No data found!"})
        }
    }catch(err){
        console.error(err);
    }
   
})

module.exports = router;