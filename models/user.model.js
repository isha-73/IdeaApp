/*This will hold user schema
it explains different fields of user and how it will be 
stored in mongodb.*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
// here we can define all the fields , its types and constraints
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    }



});