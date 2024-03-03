const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const main = require("./routes/user");
const login = require("./routes/login");
const mongoose = require("mongoose");
const session = require("express-session")
const morgan = require("morgan");
const gemini = require("./routes/gemini");
const gptGenerate = require("./routes/gpt")
const yt = require("./routes/yt");
const taskModel = require("./routes/tasks")

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("<h1>Hi Docker! 🐳</h1>");
});
app.use
app.set('trust proxy', 1)
app.use(session({secret:"somerandomkeylol1234",store:false,resave:false,cookie:{maxAge:60000}}))

app.use(morgan("dev"))
app.use("/home", main);
app.use("/user",login);  
app.use("/gemini", gemini);
app.use("/tasks",taskModel)
app.use("/yts",yt)
app.use("/images", gptGenerate); //INCLUDED THIS JUST FOR FUN 


async function connectDB(){
  try{
    await mongoose.connect(process.env.cluster,console.log(`Connected to Database!`))
  }catch(err){
    console.error(err);
  }
}







app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Servers up on port ${process.env.PORT}`);
});
