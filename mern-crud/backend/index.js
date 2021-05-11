const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb database connection established successfully !!");
})

const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');

app.use('/tasks',tasksRouter);
app.use('/users',usersRouter);


app.listen(port,()=>{
    console.log(`Server is running on the port: ${port}`);
})