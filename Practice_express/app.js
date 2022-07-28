const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const { send } = require("express/lib/response");
const app = express();


//request handling
app.get("/", (req, res) => {
  res.send();
});

app.get("/h",(req.res)=>{
    res.send("hello");
})

//routing for pattern
app.get("/fruit/:someFruit", (req,res)=>{
    let { someFruit } =  request.params // destructing an object
    res.send("You are looking for"+ someFruit)
})

//routing for all   !!MUST placed in the end of code
app.get("*",(req.res)=>{
 res.send("Can't find the page.")
})

app.listen(3000, () => {
  console.log("Server is running");
});

