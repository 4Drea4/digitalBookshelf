const mongoose = require('mongoose');

//add my validation and schema here
const bookSchema = new mongoose.Schema (

    {
        title: {
            type: String,
            required: [true, 'Enter your title'],
            trim:true
        },
        author: {
            type: String,
            required: [true, 'Author is required'],
            trim: true
        },
        isbn:{
            type: String,
            unique:true,
            trim: true
        },
        
        publishedDate: {
            type:Date
        },
        inStock:{
            type:Boolean,
            default:true
        }
    })

    const Book = mongoose.model('Book', bookSchema);

    module.exports = Book;
