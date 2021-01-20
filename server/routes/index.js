var express = require("express");
var router = express.Router();

router.get("/", (_, res) => res.send("healthy"));

module.exports = router;
