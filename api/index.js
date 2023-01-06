const express=require("express");
const app=express();

const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./roots/auth");

dotenv.config();
mongoose.set("strictQuery", false);
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,  {
  // useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify:true
}).then(console.log("Connected to moongodb")).catch((err)=>console.log(err));

app.use("/api/auth",authRoute);
app.listen("3000",()=>{
    console.log("running");
})