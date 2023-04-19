require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require("./config/db");
const methodOverride = require('method-override')


const app = express()

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))









app.listen(3000, () => {
  console.log(`Server running on  port: 3000`);
  connectToDB();
})