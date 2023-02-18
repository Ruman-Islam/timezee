import data from "@/utils/data";
import User from "@/models/User";
import Product from '../../models/Product';
import Category from '../../models/Category';
import db from "@/utils/db";
import Brand from "@/models/Brand";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Category.deleteMany();
  await Category.insertMany(data.categories);
  await Product.deleteMany();
  await Brand.deleteMany();
  await Brand.insertMany(data.brands);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
};

export default handler;