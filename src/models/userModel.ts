import mongoose from "mongoose";
import validator from "validator";

export interface User {
  name: string;
  email: string;
  phone: string;
}

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter a vaild email"],
  },
  phone: {
    type: String,
    validate: [validator.isMobilePhone, "Please enter a valid phone number"],
  },
});

userSchema.index({
  name: 1,
  email: 1,
});

export const UserModel = mongoose.model<User>("User", userSchema);
