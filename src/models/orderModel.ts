import mongoose, { Date } from "mongoose";
import validator from "validator";

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
    validate: mongoose.Types.ObjectId.isValid,
  },
  products: [
    {
      product: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, "Please enter the ID of a product. (string)"],
        ref: "Product",
        validate: mongoose.Types.ObjectId.isValid,
      },
      quantity: {
        type: Number,
        required: [true, "Please enter the quantity for this product. (int)"],
        min: 1,
      },
    },
  ],
  orderDate: {
    type: Date,
    required: [true, "Please enter a date. (string)"],
    default: Date.now(),
    validate: validator.isDate,
  },
});

export const OrderModel = mongoose.model<Order>("Order", orderSchema);
