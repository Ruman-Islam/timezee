import Category from '../../models/Category';
import db from "@/utils/db";

const handler = async (req, res) => {
  await db.connect();
  const categories = await Category.find().lean();
  await db.disconnect();
  res.send(categories);
  
};

export default handler;