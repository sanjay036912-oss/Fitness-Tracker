const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

// ✅ Register
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Register failed" });
  }
};

// ✅ Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign({ userId: user.id }, "secretkey", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};