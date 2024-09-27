const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var cors = require('cors'); 
const { body, validationResult } = require('express-validator');
// const { isAuth } = require('./authJWT');

require('dotenv').config();
const app = express();
const port = process.env.port;
//port
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/hello', function(req, res){
    res.send("Hello world!");
 });
 

// require('./db/conn')//db connection
// //routes 
// app.use(require('./routes/movieList')); //Movie List

// //server run O
app.listen(port, () => {
    console.log(`My Demo app listening at http://localhost:${port}`)
})