import express from 'express';
// dotenv 을 사용하여 환경변수 로딩
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import { updateById } from './models/Movies.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.MONGO_URI;

// console.clear();

connectDB(DATABASE_URL);

// createDoc();
// insertMany();
updateById('66f37cde631629275ee4859d');

// @ts-ignore
app.listen(port, () => console.log(`Server listening on port ${port}`));
