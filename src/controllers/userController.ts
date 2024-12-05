import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import * as commonHandlers from "./commonHandlers";
import { UserModel } from "../models/userModel";
import { OrderModel } from "../models/orderModel";

// SPECIFIC FUNCTIONS (getAllOrders, getByName)
export async function getAllOrders(req: Request, res: Response) {
  try {
    const orderList = await OrderModel.find({
      placedBy: new mongoose.Types.ObjectId(req.params.id),
    });

    res.status(200).json(orderList);
  } catch (err) {
    res.status(400).json({
      satus: "Failed",
      message: err,
    });
  }
}

export async function getByEmail(req: Request, res: Response) {
  try {
    const getUser = await UserModel.findOne({ email: req.params.email });

    res.status(200).json(getUser);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
}

// COMMON FUNCTIONS (getAll, getOne, create, update, delete)
export async function getAllUsers(req: Request, res: Response) {
  commonHandlers.getAllItems(UserModel, req, res);
}

export async function getUser(req: Request, res: Response) {
  commonHandlers.getOneItem(UserModel, req, res);
}

export async function createUser(req: Request, res: Response) {
  commonHandlers.createItem(UserModel, req, res, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
}

export async function updateUser(req: Request, res: Response) {
  interface mutableObject {
    [key: string]: any;
  }

  let newFields: mutableObject = {};
  if (req.body.name) newFields.name = req.body.name;
  if (req.body.email) newFields.email = req.body.email;
  if (req.body.phone) newFields.phone = req.body.phone;

  commonHandlers.updateItem(UserModel, req, res, newFields);
}

export async function deleteUser(req: Request, res: Response) {
  commonHandlers.deleteItem(UserModel, req, res);
}
