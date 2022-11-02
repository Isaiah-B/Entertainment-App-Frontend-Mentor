import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();


const port = process.env.PORT;
const db = process.env.DATABASE_URI || '';

mongoose.connect(db, () => console.log('Connected to database'));

app.listen(port, () => console.log(`Server running on port ${port}`));