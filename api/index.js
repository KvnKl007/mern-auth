import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.Mongo).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})
const app = express()

app.listen(3030, () => {
    console.log('Server started on port 3030!')
})