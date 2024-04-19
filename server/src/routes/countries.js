const { getCountriesFromDB } = require('../controllers/getCountries');
const { getIdCountry } = require('../controllers/getIdCountry');
const { getByName } = require('../controllers/getNameCountry');
const router = require("express").Router();

router.get("/", getCountriesFromDB);
router.get("/:id", getIdCountry);
router.get("/country/:name", getByName);

module.exports = router;