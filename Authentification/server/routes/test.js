const express = require("express");
const router = express.Router();
const test = require('../controle/Test');

router.route("/test").post(test);

module.exports = router;