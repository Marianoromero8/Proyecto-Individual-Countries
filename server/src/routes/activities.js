const router = require("express").Router();
const { getActivities } = require("../controllers/getActivities");
const { postActivities } = require("../controllers/postActivity")

router.get("/", getActivities);
router.post("/post", postActivities);

module.exports = router;