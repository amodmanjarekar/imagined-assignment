import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

function failedJson(err: unknown) {
  return {
    status: "Failed",
    message: err,
  };
}

export async function getAllItems(
  model: mongoose.Model<any>,
  req: Request,
  res: Response
) {
  try {
    const itemList = await model.find({});

    res.status(200).json(itemList);
  } catch (err) {
    console.log(err);
    res.status(400).json(failedJson(err));
  }
}

export async function getOneItem(
  model: mongoose.Model<any>,
  req: Request,
  res: Response
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid Item ID");
  } else {
    const getItem = await model.findById(req.params.id);

    if (!getItem) {
      res.status(404).send("No Item found for that ID");
    } else {
      res.status(200).json(getItem);
    }
  }
}

export async function createItem(
  model: mongoose.Model<any>,
  req: Request,
  res: Response,
  itemObject: any
) {
  try {
    const newItem = await model.create(itemObject);

    newItem.save();
    res.status(200).json({ name: newItem.name, id: newItem._id });
  } catch (err) {
    console.log(err);
    res.status(400).json(failedJson(err));
  }
}

export async function updateItem(
  model: mongoose.Model<any>,
  req: Request,
  res: Response,
  updateObject: any
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid Item ID");
  } else {
    const getItem = await model.findByIdAndUpdate(req.params.id, updateObject, {
      new: true,
    });

    if (!getItem) {
      res.status(404).send("No Item found for that ID");
    }

    res.status(200).json(getItem);
  }
}

export async function deleteItem(
  model: mongoose.Model<any>,
  req: Request,
  res: Response
) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("Invalid Item ID");
  } else {
    const getItem = await model.findByIdAndDelete(req.params.id);

    if (!getItem) {
      res.status(404).send("No Item found for that ID");
    } else {
      res
        .status(200)
        .send(
          `${getItem.name ? getItem.name : "Order"} with ID ${
            getItem._id
          } deleted.`
        );
    }
  }
}
