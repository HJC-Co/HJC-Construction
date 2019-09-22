//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// index home page get browser
app.get("/",function(req,res){
  res.send("hello!");
});
// post back to user from the server to user window
app.post("/",function(req,res){
    //res.send("hello!");
});
// index home page get browser
app.get("/contact",function(req,res){
});
// post back to user from the server to user window
app.post("/contact",function(req,res){

});
app.listen(3000,function(){
  console.log("Listening on server 3000!");
});
