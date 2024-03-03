const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/user")

router.route("/login").post(async (req,res)=>{
    const {username,password} = req?.body;
    if(!username || !password) return res.status(400).json({Alert:"Username/Password Required!"})

    const existence = await userModel.findOne({username});
    if(!existence){
        return res.status(400).json({Alert:"Invalid Username!"})
    }else{
        const authorized = bcrypt.compareSync(password,existence.password)
        // req.session.user = {username};        
        authorized ?  res.status(200).json({Alert:`${username} Logged In!`},{id:existence.id},{user:existence}) : res.status(401).json({Alert:"Unauthorized!"});
    }
}) 

router.route("/register").post(async (req,res)=>{
    const {username,password} = req?.body;
    if(!username || !password) return res.status(400).json({Alert:"Username/Password Required!"})


    const conflictUser = await userModel.findOne({username});
    if(!conflictUser){
        const passwordHashed = bcrypt.hashSync(password,Math.random())
        const created = await userModel.create({
            username,password:passwordHashed
        })
        req.session.user = {username};
        created ? res.status(201).json({Alert:`${username} Created! JSON.stringify ${JSON.stringify(req.session.user)}`}) : res.status(400).json({Alert:`Error while creating ${username}!`}) 
    }else{
        return res.status(409).json({Alert:"User Exists!"})
    }
})

router.route("/status").post((req, res)=>{
    if(req.session.user){
        res.status(200).json({Alert:`${req.session.user.username} logged in!`})
    }else{
        res.status(401).json({Alert:"No used logged in!"})
    }
})


router.route("/logout").post((req, res) => {
    if (req.session.user) {
        const username = req.session.user.username; 
        req.session.destroy((err) => {
            if (err) throw err;
            res.status(200).json({ Alert: `${username} Logged Out!` });
        });
    } else {
        res.status(400).json({ Alert: "No user was logged in!" });
    }
});

module.exports = router;