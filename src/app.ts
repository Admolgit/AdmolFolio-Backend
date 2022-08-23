import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
require('dotenv').config();

import router from './routes/route';

const app = express();

console.log('APP...');

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));



app.use('/', router);

mongoose.connect(`${process.env.MONGO_URI}`)
.then(() => console.log('Database is running'))
.catch(() => console.log('Database is not running'));


app.listen(process.env.PORT, () => {
  console.log(`AdmolFolio backend is running on ${process.env.PORT}`);
});