const router = require("express").Router();
const ctrl = require("../controllers/watchlist.controller");

router.post("/add/:asteroidId", ctrl.addToWatchlist);
router.get("/", ctrl.getWatchlist);
module.exports = router;