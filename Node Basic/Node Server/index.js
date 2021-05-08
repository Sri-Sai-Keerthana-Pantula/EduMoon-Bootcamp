// Require a module
const http = require('http');

// Create a server
const server = http.createServer((req,res)=>{
    res.end('<h1>Hello EduMoon!</h1>');
})

//run the server
server.listen(4000,(err)=>{
    if(!err){
        console.log("Successfully created a server");
    } else {
        console.log("Failed to create a server");
    }
})
