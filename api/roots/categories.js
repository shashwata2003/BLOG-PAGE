const router=require("express").Router();
const  Categories=require("../models/Category");
const { json } = require("express");

//Create new category

router.post("/",async(req,res)=>{
    const newcat=new Categories(req.body);
    try{
        const savedCat=await newcat.save();
        res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err);
    }
})

// get all Categories
router.get("/",async(req,res)=>{
    
    try{
        const cats= await Categories.find();
        res.status(500).json(cats);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router