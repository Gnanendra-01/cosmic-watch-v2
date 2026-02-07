const express = require("express");
const cors = require("cors");

const asteroidRoutes = require("./routes/asteroid.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Base test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// 🔑 THIS LINE CONNECTS THE ROUTE
app.use("/api/asteroids", asteroidRoutes);

module.exports = app;