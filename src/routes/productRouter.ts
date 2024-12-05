import express from "express";

const productRouter = express.Router();
import * as productController from "../controllers/productController";

productRouter.route("/:id/boughtby").get(productController.getBoughtByUsers);

productRouter.route("/stock").get(productController.stockQuantity);

productRouter.route("/create").post(productController.createProduct);

productRouter.route("/delete/:id").delete(productController.deleteProduct);

productRouter.route("/").get(productController.getAllProducts);

productRouter
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct);

export default productRouter;
