const Support = require("../models/supportModel");

const supportController = {
  createSupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  getMySupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  getSupportById: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  getAllSupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  updateSupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  deleteSupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
};

module.exports = supportController;
