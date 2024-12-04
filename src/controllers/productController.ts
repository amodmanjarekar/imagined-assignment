import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { ProductModel } from "../models/productModel";

export async function getAllProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const productList = await ProductModel.find({});

    res.status(200).json(productList);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function getProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid Product ID");
  }
  try {
    const getProduct = await ProductModel.findById(req.params.id);

    if (!getProduct) {
      res.status(404).send("No Product found for that ID");
    } else {
      res.status(200).json(getProduct);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function createProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newProduct = await ProductModel.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
    });

    newProduct.save();
    res.status(200).json({ name: newProduct.name, id: newProduct._id });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid Product ID");
  }

  interface mutableObject {
    [key: string]: any;
  }

  let newFields: mutableObject = {};
  if (req.body.name) newFields.name = req.body.name;
  if (req.body.category) newFields.category = req.body.category;
  if (req.body.price) newFields.price = req.body.price;
  if (req.body.stock) newFields.stock = req.body.stock;

  try {
    const getProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      newFields,
      { new: true }
    );

    if (!getProduct) {
      res.status(404).send("No Product found for that ID");
    }

    res.status(200).json(getProduct);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid Product ID");
  }
  try {
    const getProduct = await ProductModel.findByIdAndDelete(req.params.id);

    if (!getProduct) {
      res.status(404).send("No Product found for that ID");
    } else {
      res
        .status(200)
        .send(
          `Product ${getProduct.name} with Product ID ${getProduct._id} deleted.`
        );
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}
