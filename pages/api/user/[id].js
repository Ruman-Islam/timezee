import User from "@/models/User";
import db from "@/utils/db";

const handler = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  await db.disconnect();
  res.send(user);
};

export default handler;
