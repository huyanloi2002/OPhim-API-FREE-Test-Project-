const express = require("express");
const router = express.Router();

const { checkUserFromClient } = require("../controller/userController");

router.post("/check_user", checkUserFromClient);

module.exports = router;
