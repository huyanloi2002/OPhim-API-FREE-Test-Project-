const express = require("express");
const router = express.Router();

const {
  register,
  login,
  refreshToken,
  logout,
  sendOTPEmail,
} = require("../controller/authController");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/register", register);
router.post("/login", login);
router.get("/send_email", verifyToken, sendOTPEmail);
router.post("/refresh_token", refreshToken);
router.post("/logout", logout);

module.exports = router;
