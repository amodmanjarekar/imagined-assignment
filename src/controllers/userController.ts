import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { UserModel } from "../models/userModel";

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userList = await UserModel.find({});

    res.status(200).json(userList);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid User ID");
  }
  try {
    const getUser = await UserModel.findById(req.params.id);

    if (!getUser) {
      res.status(404).send("No User found for that ID");
    } else {
      res.status(200).json(getUser);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newUser = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    newUser.save();
    res.status(200).json({ name: newUser.name, id: newUser._id });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid User ID");
  }

  interface mutableObject {
    [key: string]: any;
  }

  let newFields: mutableObject = {};
  if (req.body.name) newFields.name = req.body.name;
  if (req.body.email) newFields.email = req.body.email;
  if (req.body.phone) newFields.phone = req.body.phone;

  try {
    const getUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      newFields,
      { new: true }
    );

    if (!getUser) {
      res.status(404).send("No user found for that ID");
    }

    res.status(200).json(getUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid User ID");
  }
  try {
    const getUser = await UserModel.findByIdAndDelete(req.params.id);

    if (!getUser) {
      res.status(404).send("No User found for that ID");
    } else {
      res
        .status(200)
        .send(`User ${getUser.name} with User ID ${getUser._id} deleted.`);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}
