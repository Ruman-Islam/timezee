const { default: User } = require("@/models/User");
const { default: db } = require("@/utils/db");
import bcryptjs from "bcryptjs";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { name, email, phone, password, newsLetter } = req.body;
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !phone ||
    !password ||
    !newsLetter ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }
  await db.connect();
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    await db.disconnect();
    return;
  }

  const newUser = new User({
    name,
    email,
    phone,
    newsLetter,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message: "Created user!",
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}

export default handler;
