import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: String, require: true, default: false },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("User", UserSchema);
export default user;
