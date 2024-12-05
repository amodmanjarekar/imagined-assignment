import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  placedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    required: [true, "Please enter the ID of a User. (string)"],
  },
  products: [
    {
      product: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, "Please enter the ID of a product. (string)"],
      },
      quantity: {
        type: Number,
        required: [true, "Please enter the quantity for this product. (int)"],
        default: 0,
      },
    },
  ],
  orderDate: {
    type: Date,
    required: [true, "Please enter a date. (string)"],
    default: Date.now(),
  },
});

export const OrderModel = mongoose.model("Order", orderSchema);
