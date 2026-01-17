require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


//adding middleware
app.use(express.json());

//route to test server
app.get('/', (req,res) => {
    res.send('<h1>Digital Bookshelf</>');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})