const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createWorkout = async (req, res) => {
  try {
    console.log("USER ID 👉", req.userId); // 🔥 ADD THIS

    const workout = await prisma.workout.create({
      data: {
        name: req.body.name,
        userId: req.userId,
      },
    });

    res.json(workout);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await prisma.workout.findMany({
      where: {
        userId: req.userId, // 🔥 only user's workouts
      },
    });

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching workouts" });
  }
};