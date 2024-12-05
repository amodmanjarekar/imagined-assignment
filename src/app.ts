import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRouter from "./routes/userRouter";
import productRouter from "./routes/productRouter";
import orderRouter from "./routes/orderRouter";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce"
);

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
