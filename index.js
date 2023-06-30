
require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose');
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database= mongoose.connection
database.on('error', (error)=>{
    console.log('failed to connect');
    console.log(error);
})
database.once('connected', ()=>{
    console.log('connected to database');
})
const app= express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log('server started at ${3000}')
})

const routes=require('./routes/routes');
app.use('/api', routes)