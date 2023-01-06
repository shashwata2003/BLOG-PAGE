const mongoose=require("mongoose");
const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true,
    },
    desc:{
        type:String,
        required:false
    },
    photo:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    categories:{
        type:array,
        required:false
    }

},{timestamps:true});

module.exports=mongoose.model("Post",PostSchema)