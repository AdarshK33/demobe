const express = require('express');
const router = express.Router();

// const { body, validationResult } = require('express-validator');
// const { isAuth } = require('../authJWT');

//userSchema
const Movies = require("../models/Movie");
// const faker = require('faker');
const mongoose = require('mongoose');

router.post('/movie', async function(req, res) {
    try {
        const data = req.body.data;
        const newMoviesObj = new Movies({
            id: new mongoose.Types.ObjectId(),
            name: data.name,
            description: data.description,
            status: data.status,
          
        })
        const new_movie_result = await newMoviesObj.save();

        if (new_movie_result) {
            return res.send({
                status: "success",
                status_code: 200,
                message: "new updated movie saved successfully.",
                data: {  newMoviesObj }   
            });  
        }

        throw new Error("Unable to create new Movie record");

    } catch (error) {
        res.send({
            status: "bad request",
            status_code: 400,
            message: error.message,
            error: ""
        })
    }
});



router.get('/movie', async function(req, res) {

    try {
         const movie_result = await Movies.find()
           if (movie_result) {
            return res.send({
                status: "success",
                status_code: 200,
                message: "Get movie successfully.",
                data: {  movie_result }        
            });  
        }
        throw new Error("Unable to movie record");
    } catch (error) {
        res.send({
            status: "bad request",
            status_code: 400,
            message: error.message,
            error: ""
        })
    }
});

module.exports = router;