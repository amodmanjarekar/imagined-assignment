import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import * as commonHandlers from "./commonHandlers";
import { UserModel } from "../models/userModel";

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
