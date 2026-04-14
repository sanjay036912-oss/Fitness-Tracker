const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
  addExercise,
  getExercises
} = require("../controllers/exerciseController");

// Add exercise
router.post("/", authMiddleware, addExercise);

// Get exercises by workout
router.get("/:workoutId", authMiddleware, getExercises);

module.exports = router;