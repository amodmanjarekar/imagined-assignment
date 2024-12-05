import express from "express";

const userRouter = express.Router();
import * as userController from "../controllers/userController";

userRouter.route("/:id/orders").get(userController.getAllOrders);

userRouter.route("/create").post(userController.createUser);

userRouter.route("/delete/:id").delete(userController.deleteUser);

userRouter.route("/").get(userController.getAllUsers);

userRouter.route("/by-name/:name").get(userController.getByName);
userRouter.route("/by-email/:email").get(userController.getByEmail);

userRouter
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

export default userRouter;
