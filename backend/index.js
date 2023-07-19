const express=require("express")
const dotenv=require("dotenv").config()
const jwb=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.send("home page")
    console.log("hurray!!")
})
app.listen(5000)
