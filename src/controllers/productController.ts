import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import * as commonHandlers from "./commonHandlers";
import { ProductModel } from "../models/productModel";

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
