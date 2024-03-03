const express = require("express");
const router = express.Router();
const Axios = require("axios");
const userModel = require("../models/user")
const apiURI = "https://api.openai.com/v1/chat/completions";
require("dotenv").config();
const apiKey = process.env.GPTKEY;

router.route("/").post(async (req, res) => {
  const { story } = req?.body;
  if (!story)
    return res.status(400).json({ Alert: "Hey, no story requested! 😟" });

  query = `Write me a story about ${story}`;

  try {
    const response = await Axios.post(`${apiURI}`, query, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!response) {
      return res.status(400).json({ Alert: "Couldn't make story!" });
    } else {
      return res.status(200).json(response.data.messages);
    }
  } catch (err) {
    console.error(err);
  }
});

router.route("/personal")
  .get(async (req, res) => {
    try {
      const data = await userModel.find(); //req.session.user.id
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .post(async (req, res) => {
    function todayCal(){
      let date = new Date();
let day = date.getDate();
let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let month = monthNames[date.getMonth()];
let year = date.getFullYear();

return `${month} ${day}, ${year}`;

  }
  const todayEvent = todayCal();
    try {
      const { feeling,userId } = req.body;
      if (!feeling ) {
        return res.status(400).json({ Alert: "Today's event or user input not sent!" });
      }

      const userExists = await userModel.findById(req.session.user.id);
      if (!userExists) {
        return res.status(404).json({ Alert: "Invalid user!" });
      }

      let records = [...userExists.userHistory];
      records.push({ feeling, todayEvent });

      await userModel.findByIdAndUpdate(userId, { userHistory: records });
      
      res.status(201).json({ Alert: "Added new record!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


module.exports = router;
