const express= require('express');
const serverConfig = require('./configs/server.config.js');
const app = express(); // central character
const mongoose = require('mongoose');
const dbconfig = require('./configs/db.config.js');
const userModel = require('./models/user.model.js');

/* 
logic to connect MongoDB and create ADMIN user
Need to have mongodb up and running in system
*/ 
mongoose.connect(dbconfig.DB_URL)
const db=mongoose.connection;

db.on('error',()=>{console.log('Error in connecting to DB')});

db.once('open',()=>{
    console.log('Connected to DB');
    init();
});

async function  init(){

    /* Initiallize mongo db
       Need to create ADMIN user
    */
   /**
    * chwck if admin is already created
    */
   
    let adminUser = await userModel.findOne({userId:'admin'});
    if(adminUser){
        console.log('Admin already created');
        return;
    }

   const admin =   await userModel.create({
        name:'Isha Bule',
        userId:'admin',
        email:'bulekalyani@gmail.com',
        userType:'ADMIN',
        password:'admin'
       })
         console.log('Admin created',admin);
}


app.listen(serverConfig.PORT, () => { // callback function
    console.log('Server is running on port 3000');
});