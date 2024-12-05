import mongoose from "mongoose";

export interface Product {
  name: string;
  category: string;
  price: Number;
  stock: Number;
}

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
});

export const ProductModel = mongoose.model<Product>("Product", productSchema);
