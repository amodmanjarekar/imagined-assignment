import mongoose from "mongoose";

export interface Product {
  name: string;
  category: string;
  price: Number;
  stock: Number;
}

const productSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String, enum: ["Footwear", "Clothing", "Electronics"] },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0, default: 0 },
});

productSchema.index({
  name: 1,
});

export const ProductModel = mongoose.model<Product>("Product", productSchema);
