import mongoose from "mongoose";

export interface User {
  name: string;
  email: string;
  phone: string;
}

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  phone: String,
});

export const UserModel = mongoose.model<User>("User", userSchema);
