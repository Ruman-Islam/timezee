import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, lowercase: true, trim: true },
    category: { type: String, required: true, lowercase: true, trim: true },
    images: { type: Array, required: true },
    price: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    brand: { type: String, required: true, lowercase: true, trim: true },
    countInStock: { type: Number, required: true },
    description: { type: String, required: true, lowercase: true, trim: true },
    specification: { type: Array, required: true },
    size: { type: String, required: true },
    model: { type: String, require: true },
    sellCount: { type: Number, default: 0 },
    rating: { type: Number, required: true, default: 0 },
    reviews: { type: Array },
    productViews: { type: Number, default: 0 },
    sku: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Using to update the featured criteria
productSchema.pre("updateOne", async function () {
  const docToUpdate = await this.model.findOne(this.getQuery());
  if (docToUpdate.productViews >= 10 && docToUpdate.rating >= 4) {
    this.set({ isFeatured: true });
  }
});

const Product =
  mongoose?.models?.Product || mongoose?.model("Product", productSchema);
export default Product;
