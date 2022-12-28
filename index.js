const express= require("express");
const app=express();

app.get("/", (req,res)=>{
 res.send("<h1>Visiting Root</h1>");
});


app.listen(4000, () =>{
console.log("App is running at 3000");
});
