const { getCountriesFromDB } = require('../controllers/getCountries');
const router = require("express").Router();

router.get("/", getCountriesFromDB);
router.get("/:id", );
router.get("/country/:name", );

module.exports = router;