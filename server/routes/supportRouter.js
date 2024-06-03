const express = require("express");
const router = express.Router();

const {
  createSupport,
  getAllSupport,
  getMySupport,
  getSupportById,
  updateSupport,
  deleteSupport,
} = require("../controller/supportController");

const { verifyToken } = require("../middleware/verifyToken");

router.post("/create_support", verifyToken, createSupport);
router.get("/get_all_support", verifyToken, getAllSupport);
router.get("/get_my_support", verifyToken, getMySupport);
router.get("/get_support_id", verifyToken, getSupportById);
router.patch("/update_support", verifyToken, updateSupport);
router.delete("/delete_support", verifyToken, deleteSupport);

module.exports = router;
