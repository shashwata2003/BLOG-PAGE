const express=require("express");
const app=express();

const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./roots/auth");
const userRoute=require("./roots/user");
const postRoute=require("./roots/post");
const categoriesRoute=require("./roots/categories");
const multer=require("multer");

dotenv.config();
mongoose.set("strictQuery", false);
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,  {
  // useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify:true
}).then(console.log("Connected to moongodb")).catch((err)=>console.log(err));


const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images")
  },filename:(req,file,cb)=> {
    cb(null,"hello.jpeg");
  },
});

const upload=multer({storage:storage});
app.post("api/upload",upload.single("file",(req,res)=>{
  res.status(200).json("file huploaded");
}));

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoriesRoute);



app.listen("3000",()=>{
    console.log("running");
})