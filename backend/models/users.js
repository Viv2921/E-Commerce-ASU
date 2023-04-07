//schema 
const express = require('express')
const mongoose = require('mongoose')
const sch = {
    username:String,
        email: String,
    password: String,
}

/* const monmodel=mongoose.model("usersses",sch)    */

module.exports = mongoose.model("Registred Users", sch);

