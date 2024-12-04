import express from "express";

const userRouter = express.Router();
import * as userController from "../controllers/userController";

userRouter.route("/").get(userController.getAllUsers);

userRouter
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

userRouter.route("/create").post(userController.createUser);

export default userRouter;
