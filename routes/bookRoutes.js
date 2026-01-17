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

router.get('/', async (req,res) => {
    try{
        const everyBook = await Book.find();
        res.status(200).json(everyBook);
    }catch (error) {
        console.error('Error getting books');
        res.status(500).json({message: 'Could not get books'})
    }
}
);

// get /id:
 router.get('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({message: `Book with this id is not found`})
        } res.status(200).json(book);
    }
        catch (error) {
            console.error('There was a problem  getting your book');
        res.status(400).json({message:`Uh oh thats not right, something seems to failed on our end`}); }

    }
 )

// PUT /:id


//delete


//export the router