const router = require("express").Router();
const ctrl = require("../controllers/asteroid.controller");

router.get("/feed", ctrl.feed);
module.exports = router;