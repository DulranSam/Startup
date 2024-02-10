const express = require("express");
const router = express.Router();
const Axios = require("axios");
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

module.exports = router;
