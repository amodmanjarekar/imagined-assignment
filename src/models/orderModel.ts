import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  placedBy: {type: mongoose.SchemaTypes.ObjectId, required: true},
  products: [{
    product: {type: mongoose.SchemaTypes.ObjectId, required: true},
    quantity: {type: Number, required: true, default: 0},
  }],
  orderDate: Date,
});

export const orderModel = mongoose.model("User", orderSchema);