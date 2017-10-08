const express = require("express");


var app = express();

app.get("/",(req,res)=>{
    res.send({msg:"Hello World..!!"});
})


app.listen(3000,()=>{
    console.log("Application has started");
})

