const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
    },
    description: {
      type: String,
      maxLength: 2000,
      required: true,
    },
    images: [{ public_id: String, url: String }],
    status: {
      type: String,
      enum: ["Unconfirmed", "Confirmed", "Resolved"],
      default: "Unconfirmed",
    },
    message_of_admin: {
      type: String,
      default:
        "Cảm ơn bạn đã gửi phiếu hỗ trợ, chúng tôi sẽ giải quyết cho bạn trong thời gian ngắn nhất!",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Support", supportSchema);
