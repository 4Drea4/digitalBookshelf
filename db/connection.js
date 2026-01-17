const mongoose = require('mongoose');

const connectToDB = async () =>{
    const mongoUri= process.env.MONGODB_URI;

    if(!mongoUri) {
        console.error('MONGODB_URI is not in .env');
        return;
    }

    try{
        await mongoose.connect(mongoUri);
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('MongoDB is failing', error.message);
        return;
    }
}
module.exports = connectToDB;