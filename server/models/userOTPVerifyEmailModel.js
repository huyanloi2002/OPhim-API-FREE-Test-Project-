const mongoose = require("mongoose");

const userOTPVerifyEmailSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    otp: {
      type: String,
      reuired: true,
    },
    expiredAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "User_OTP_Verify_Email",
  userOTPVerifyEmailSchema
);
