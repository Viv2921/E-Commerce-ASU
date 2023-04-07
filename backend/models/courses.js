const express = require('express')
const mongoose = require('mongoose')

const courses = {
        id: String,
        imgName: String,
        department: String,
        price: String,
        program: String,
        title: String,
        urlPath: String,
}

module.exports = mongoose.model("Courses", courses); 
