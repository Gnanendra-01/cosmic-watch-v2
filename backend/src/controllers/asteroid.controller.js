const nasa = require("../services/nasa.services");
const risk = require("../services/risk.service");

exports.feed = async (req, res) => {
  const asteroids = await nasa.getAsteroids();

  const enriched = asteroids.map(a => ({
    id: a.id,
    name: a.name,
    hazardous: a.is_potentially_hazardous_asteroid,
    risk: risk.calculateRisk(a)
  }));

  res.json(enriched);
};