import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true},
  phone: String,
});

export const UserModel = mongoose.model("User", userSchema);