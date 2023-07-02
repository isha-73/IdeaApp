const express = require('express');
const serverConfig = require('./configs/server.config.js');
const app = express(); // central character
const mongoose = require('mongoose');
const dbconfig = require('./configs/db.config.js');
const userModel = require('./models/user.model.js');
const bcrypt = require('bcrypt');

/* 
logic to connect MongoDB and create ADMIN user
Need to have mongodb up and running in system
*/
mongoose.connect(dbconfig.DB_URL)
const db = mongoose.connection;

db.on('error', () => { console.log('Error in connecting to DB') });

db.once('open', () => {
    console.log('Connected to DB');
    init();
});

async function init() {

    /* Initiallize mongo db
       Need to create ADMIN user
    */
    /**
     * chwck if admin is already created
     */

    let adminUser = await userModel.findOne({ userId: 'admin3' });
    if (adminUser) {
        console.log('Admin already created');
        return;
    }

        adminUser = await userModel.create({
        name: 'Isha',
        userId: 'admin3',
        email: 'bulekalyaniiigmail.com',
        userType: 'ADMIN',
        password: bcrypt.hashSync('admin',8)
    })
    console.log('Admin created', adminUser);
}


app.listen(serverConfig.PORT, () => { // callback function
    console.log( `Server is running on port ${serverConfig.PORT}`);
});