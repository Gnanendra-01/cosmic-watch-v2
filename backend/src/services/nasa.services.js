const axios = require("axios");

exports.getAsteroids = async () => {
  const res = await axios.get(
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY"
  );
  return Object.values(res.data.near_earth_objects);
};