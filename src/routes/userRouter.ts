import express from "express";

const userRouter = express.Router();
import * as userController from "../controllers/userController";

userRouter.route("/create").post(userController.createUser);

userRouter.route("/delete/:id").delete(userController.deleteUser);

userRouter.route("/").get(userController.getAllUsers);

userRouter
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

export default userRouter;
