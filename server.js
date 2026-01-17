require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


//adding middleware
app.use(express.json());