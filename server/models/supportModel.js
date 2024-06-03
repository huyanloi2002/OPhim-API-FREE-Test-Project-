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
    phone: {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Support", supportSchema);
