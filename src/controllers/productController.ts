import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import * as commonHandlers from "./commonHandlers";
import { ProductModel } from "../models/productModel";
import { OrderModel } from "../models/orderModel";
import { User } from "../models/userModel";

// SPECIFIC FUNCTIONS (getBoughtByUsers, stockQuantity)
export async function getBoughtByUsers(req: Request, res: Response) {
  interface BoughtByFormat {
    name: string;
    orderId: mongoose.Types.ObjectId;
  }

  var boughtBy: BoughtByFormat[] = [];

  try {
    const orderList = await OrderModel.find({
      products: {
        $elemMatch: {
          product: new mongoose.Types.ObjectId(req.params.id),
        },
      },
    }).populate<{ placedBy: User }>("placedBy");

    orderList.forEach((order) => {
      boughtBy.push({
        name: order.placedBy.name,
        orderId: order._id,
      });
    });

    res.status(200).json(boughtBy);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
}

export async function stockQuantity(req: Request, res: Response) {
  try {
    const total = await ProductModel.aggregate([
      { $group: { _id: null, amount: { $sum: "$stock" } } },
    ]);

    res.status(200).json(total);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
}

// COMMON FUNCTIONS (getAll, getOne, create, update, delete)
export async function getAllProducts(req: Request, res: Response) {
  commonHandlers.getAllItems(ProductModel, req, res);
}

export async function getProduct(req: Request, res: Response) {
  commonHandlers.getOneItem(ProductModel, req, res);
}

export async function createProduct(req: Request, res: Response) {
  commonHandlers.createItem(ProductModel, req, res, {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
  });
}

export async function updateProduct(req: Request, res: Response) {
  interface mutableObject {
    [key: string]: any;
  }

  let newFields: mutableObject = {};
  if (req.body.name) newFields.name = req.body.name;
  if (req.body.category) newFields.category = req.body.category;
  if (req.body.price) newFields.price = req.body.price;
  if (req.body.stock) newFields.stock = req.body.stock;

  commonHandlers.updateItem(ProductModel, req, res, newFields);
}

export async function deleteProduct(req: Request, res: Response) {
  commonHandlers.deleteItem(ProductModel, req, res);
}
