const express = require("express");
const router = express.Router();

const {
  register,
  login,
  refreshToken,
  logout,
} = require("../controller/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh_token", refreshToken);
router.get("/logout", logout);

module.exports = router;