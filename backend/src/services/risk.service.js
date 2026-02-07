exports.calculateRisk = (asteroid) => {
  if (!asteroid.close_approach_data || asteroid.close_approach_data.length === 0) {
    return "Unknown";
  }

  const diameter =
    asteroid.estimated_diameter.kilometers.estimated_diameter_max;

  const velocity =
    asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour;

  const missDistance =
    asteroid.close_approach_data[0].miss_distance.kilometers;

  const score = (diameter * velocity) / missDistance;

  if (score > 0.00005) return "High";
  if (score > 0.00001) return "Medium";
  return "Low";
};