const express = require('express')
const mongoose = require('mongoose')

const cart = {
        id:String,
        title:{type:String,
                unique:true},        
        price:String

}



module.exports = mongoose.model("cart items", cart); 