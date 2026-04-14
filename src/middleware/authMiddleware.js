const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log("HEADERS 👉", req.headers.authorization); // 🔥

    const token = req.headers.authorization?.split(" ")[1];

    console.log("TOKEN 👉", token); // 🔥

    if (!token) {
      return res.status(401).json({ error: "No token" });
    }

    const decoded = jwt.verify(token, "secretkey");

    console.log("DECODED 👉", decoded); // 🔥

    req.userId = decoded.userId;

    next();
  } catch (err) {
    console.log("JWT ERROR 👉", err.message);
    res.status(401).json({ error: "Invalid token" });
  }
};