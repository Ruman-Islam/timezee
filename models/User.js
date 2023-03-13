import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    newsLetter: {
      type: String,
      required: true,
      enum: {
        values: ["yes", "no"],
        message:
          "Newsletter subscription value can't be {VALUE}, must be yes/no",
      },
    },
    status: {
      type: Boolean,
      default: false,
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
