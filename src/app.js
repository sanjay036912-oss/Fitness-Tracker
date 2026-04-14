const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Fitness tracker API Running 💪");
});

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on ${PORT}'));

const workoutRoutes = require("./routes/workoutRoutes");
app.use("/workouts", workoutRoutes);

const exerciseRoutes = require("./routes/exerciseRoutes");
app.use("/exercises", exerciseRoutes);

console.log(`Server running on ${PORT}`); // ✅ use backticks