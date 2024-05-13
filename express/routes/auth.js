const express = require("express");
const router = express.Router();
const {authorize} = require("../controllers/auth")

router.route("/").post(authorize);

module.exports = router;