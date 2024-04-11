const router = require("express").Router();
const routeCountries = require("./countries")
const routeActivities = require("./activities")

router.use("/countries", routeCountries)
router.use("/activities", routeActivities)

module.exports = router;
