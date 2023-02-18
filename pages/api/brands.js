import Brand from "../../models/Brand";
import Category from "@/models/Category";
import db from "@/utils/db";

const handler = async (req, res) => {
  const data = {};
  await db.connect();
  data.brands = await Brand.find();
  data.categories = await Category.find();
  await db.disconnect();
  res.send(data);
};

export default handler;
