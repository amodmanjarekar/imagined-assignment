import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import * as commonHandlers from "./commonHandlers";
import { OrderModel } from "../models/orderModel";
import { ProductModel } from "../models/productModel";

// UTILITIES
function populateProducts(products: any[]) {
  interface ProductInterface {
    product: mongoose.Types.ObjectId;
    quantity: Number;
  }
  const productArray: ProductInterface[] = [];

  products.forEach((item: { product: string; quantity: Number }) => {
    productArray.push({
      product: new mongoose.Types.ObjectId(item.product),
      quantity: item.quantity,
    });

    ProductModel.findByIdAndUpdate(item.product, {
      $inc: { stock: -item.quantity },
    }).exec();
  });

  return productArray;
}

// SPECIFIC FUNCTIONS (getRecent)
export async function getRecentOrders(req: Request, res: Response) {
  const dateNow = new Date();
  const date7DaysAgo = new Date(new Date().setDate(dateNow.getDate() - 7));

  try {
    const recentOrders = await OrderModel.find({
      orderDate: { $gte: date7DaysAgo },
    });

    res.status(200).json(recentOrders);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
}

// COMMON FUNCTIONS (getAll, getOne, create, update, delete)
export async function getAllOrders(req: Request, res: Response) {
  commonHandlers.getAllItems(OrderModel, req, res);
}

export async function getOrder(req: Request, res: Response) {
  commonHandlers.getOneItem(OrderModel, req, res);
}

export async function createOrder(req: Request, res: Response) {
  let productArray;
  try {
    productArray = populateProducts(req.body.products);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }

  commonHandlers.createItem(OrderModel, req, res, {
    placedBy: new mongoose.Types.ObjectId(req.body.placedBy),
    products: productArray,
    orderDate: req.body.orderDate,
  });
}

export async function updateOrder(req: Request, res: Response) {
  interface mutableObject {
    [key: string]: any;
  }

  let newFields: mutableObject = {};
  if (req.body.placedBy) newFields.placedBy = req.body.placedBy;
  if (req.body.products)
    newFields.products = populateProducts(req.body.products);
  if (req.body.orderDate) newFields.orderDate = req.body.orderDate;

  commonHandlers.updateItem(OrderModel, req, res, newFields);
}

export async function deleteOrder(req: Request, res: Response) {
  commonHandlers.deleteItem(OrderModel, req, res);
}
