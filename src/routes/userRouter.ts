import express from "express";

const userRouter = express.Router();
import * as userController from "../controllers/userController";

userRouter.route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

userRouter.route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

export default userRouter;