const express = require('express');
const app = express();
const path = require('path')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send("I'm an express framework");
})

app.get("/home/:uname",(req,res)=>{
    // console.log(req.params.uname)
    const name = req.params.uname;

    res.render("home",{Username:name,job:"best Web Developer"});
})


// app.get("/home",(req,res)=>{
//     res.render("home",{Username:"Sam",job:"best Web Developer"});
// })


// app.get("/edumoon",(req,res)=>{
//     res.send("I'm EduMoon");
// })

app.get("/sam",(req,res)=>{
    res.send("<h1>I'm Sam!</h1>");
})

app.get("/edumoon/:key",(req,res)=>{
    console.log(req.params)
    res.send(`<h2>Your instructor is ${req.params.key}</h2>`);
})



app.listen(4000,(err)=>{
    if(!err){
        console.log("Connected to port 4000");
    } else {
        console.log("Unable to connect "+err);
    }
})