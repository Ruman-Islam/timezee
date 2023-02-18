import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a Brand name"],
      lowercase: true,
      unique: true,
    },
    image: {
      type: String,
      required: [true, "Please provide a Brand URL"],
    },
    description: String,
  },
  { timestamps: true }
);

const Brand = mongoose?.models?.Brand || mongoose?.model("Brand", brandSchema);

export default Brand;
