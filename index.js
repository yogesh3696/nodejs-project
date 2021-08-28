const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("fisrt code");
})

app.listen(port,()=>{
    console.log("server started at port "+port);
})