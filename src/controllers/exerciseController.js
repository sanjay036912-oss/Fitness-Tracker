const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Add exercise
exports.addExercise = async (req, res) => {
  try {
    const { name, sets, reps, workoutId, weight } = req.body;

    const exercise = await prisma.exercise.create({
      data: {
        name,
        sets,
        reps,
        workoutId: Number(workoutId), // 🔥 IMPORTANT FIX
        weight: weight || null,
      },
    });

    res.json(exercise);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Get exercises for a workout
exports.getExercises = async (req, res) => {
  try {
    const exercises = await prisma.exercise.findMany({
      where: {
        workoutId: parseInt(req.params.workoutId),
      },
    });

    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};