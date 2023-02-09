import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a category name"],
      lowercase: true,
      unique: true,
    },
    image: {
      type: String,
      required: [true, "Please provide a category URL"],
    },
    description: String,
  },
  { timestamps: true }
);

const Category =
  mongoose?.models?.Category || mongoose?.model("Category", categorySchema);

export default Category;
