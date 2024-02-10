const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const main = require("./routes/user");
const login = require("./routes/login");
const mongoose = require("mongoose");
const session = require("express-session")

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("<h1>Hi Docker! 🐳</h1>");
});

app.set('trust proxy', 1)
app.use(session({secret:"somerandomkeylol1234",store:false,resave:false,cookie:{maxAge:60000}}))

app.use("/home", main);
app.use("/user",login);   


async function connectDB(){
  try{
    await mongoose.connect(process.env.cluster,console.log(`Connected to Server!`))
  }catch(err){
    console.error(err);
  }
}







app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Servers up on port ${process.env.PORT}`);
});
