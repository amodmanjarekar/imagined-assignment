import express from "express";
import dotenv from "dotenv";

import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

app.listen(port, () => {
  console.log(`listening on ${port}`);
});