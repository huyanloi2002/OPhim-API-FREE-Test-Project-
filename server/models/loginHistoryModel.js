const mongoose = require("mongoose");

const loginHistorySchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    login_time: {
      type: Date,
      required: true,
    },
    device: {
      type: String,
    },
    browser: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Login_History", loginHistorySchema);
