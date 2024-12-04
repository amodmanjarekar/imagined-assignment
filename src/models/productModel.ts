import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: {type: Number, required: true},
  stock: {type: Number, required: true, default: 0},
});