import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRouter from "./routes/userRouter";
import productRouter from "./routes/productRouter";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
