const express = require('express');
const app = express();
const path = require('path')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

const api = require('novelcovid');
 
api.settings({
    baseUrl: 'https://disease.sh'
})

app.get("/",(req,res)=>{
    res.send("I'm an express framework");
})

app.get("/countries/:whichCountry",(req,res)=>{
    // console.log(req.params.whichCountry)
    let requiredCountry = req.params.whichCountry;
    api.countries({country:requiredCountry}).then((data)=>{
        res.render('countryData',{receivedData:data})
    }) 
})


app.listen(4000,(err)=>{
    if(!err){
        console.log("Connected to port 4000");
    } else {
        console.log("Unable to connect "+err);
    }
})