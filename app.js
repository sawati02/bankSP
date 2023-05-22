const express =require("express");

const app=express();
app.get("/",(req,res)=>{
    res.send("Welcome to my Github")
})
app.listen(7170,()=>{
    res.send("Server running is port on 7170")
})