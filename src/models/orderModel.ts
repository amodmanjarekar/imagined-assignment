import mongoose, { Date } from "mongoose";

export interface Order {
  placedBy: mongoose.Types.ObjectId;
  products: {
    product: mongoose.Types.ObjectId;
    quantity: Number;
  }[];
  orderDate: Date;
}

const orderSchema = new mongoose.Schema({
  placedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    required: [true, "Please enter the ID of a User. (string)"],
    ref: "User",
  },
  products: [
    {
      product: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, "Please enter the ID of a product. (string)"],
        ref: "Product",
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

export const OrderModel = mongoose.model<Order>("Order", orderSchema);
