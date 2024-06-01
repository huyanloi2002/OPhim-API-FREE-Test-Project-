const express = require("express");
const router = express.Router();

const {
  checkUserFromClient,
  getLoginHistory,
} = require("../controller/userController");

const { verifyToken } = require("../middleware/verifyToken");

router.post("/check_user", checkUserFromClient);
router.get("/login_history", verifyToken, getLoginHistory);

module.exports = router;
