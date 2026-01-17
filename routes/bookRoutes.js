const express = require('express');
const Book = require('../models/Book');

const router = express.Router();


//post
router.post('/', async (req,res) => {
    try{
        const createBook = await Book.create(req, body);
        res.status(201).json(createBook);
    }catch (error) {  
        console.error('Error creating book', error.message);
        res.status(400).json({message: 'That couldnt be created, try again later'})

    }
});

//get /


// get /id:


// PUT /:id


//delete


//export the router