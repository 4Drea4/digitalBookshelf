require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const connectToDB = require('./db/connection');
const bookRoutes = require('express');
//adding middleware
app.use(express.json());

//route to test server
app.get('/', (req,res) => {
    res.send('<h1>Digital Bookshelf</>');
});

const startServer = async () => {
    await connectToDB();
}

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

startServer();