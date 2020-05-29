const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"./static")));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./static/index.html"));
});

app.get("/speakers",function(req,res){
    res.sendFile(path.join(__dirname,"./static/speakers.html"));
});

app.listen(3000,function(){
        console.log("Started");
});