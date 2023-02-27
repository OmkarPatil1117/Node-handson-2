const express = require("express");

const app = express();


app.get('/', (req,res)=>{
    res.send("Home Page of Express");
    res.end();
})
app.get('/contact', (req,res)=>{
    res.send("Contact Page of Express");
    res.end();
})


app.get('/about', (req,res)=>{
    res.send("About Page of Express");
    res.end();
})


app.listen(8000);
console.log("Success")