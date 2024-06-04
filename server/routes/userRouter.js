const express = require("express");
const router = express.Router();

const {
  getCurrentUser,
  updateUser,
  getAllUser,
  deleteUser,
  verifyIdentify,
  verifyEmail,
  checkUserFromClient,
  getLoginHistory,
} = require("../controller/userController");

const { verifyToken } = require("../middleware/verifyToken");

router.get("/user", verifyToken, getCurrentUser);
router.get("/users", verifyToken, getAllUser);
router.patch("/update_user", verifyToken, updateUser);
router.delete("/delete_user", verifyToken, deleteUser);
router.patch("/verify_identify", verifyToken, verifyIdentify);
router.patch("/verify_email", verifyToken, verifyEmail);
router.post("/check_user", checkUserFromClient);
router.get("/login_history", verifyToken, getLoginHistory);

module.exports = router;
