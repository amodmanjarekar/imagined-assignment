import express from "express";

const orderRouter = express.Router();
import * as orderController from "../controllers/orderController";

orderRouter.route("/create").post(orderController.createOrder);

orderRouter.route("/delete/:id").delete(orderController.deleteOrder);

orderRouter.route("/").get(orderController.getAllOrders);

orderRouter
  .route("/:id")
  .get(orderController.getOrder)
  .patch(orderController.updateOrder);

export default orderRouter;
