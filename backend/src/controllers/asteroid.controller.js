const nasa = require("../services/nasa.services");
exports.feed = async (req, res) => {
    res.json(await nasa.getAsteroids());
};