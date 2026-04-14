const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authControllers");

// ✅ BOTH routes must exist
router.post("/register", register);
router.post("/login", login);   // 🔥 IMPORTANT

module.exports = router;