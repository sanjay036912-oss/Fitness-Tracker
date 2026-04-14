const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { createWorkout, getWorkouts } = require("../controllers/workoutController");

// 🔐 PROTECT ROUTES
router.post("/", authMiddleware, createWorkout);
router.get("/", authMiddleware, getWorkouts);

module.exports = router;