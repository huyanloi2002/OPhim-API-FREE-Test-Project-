const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      maxLength: 50,
    },
    password: {
      type: String,
      require: true,
      maxLengthh: 100,
    },
    username: {
      type: String,
      unique: true,
      maxLength: 50,
    },
    avatar: {
      public_id: {
        type: String,
        default: "2048px-OOjs_UI_icon_userAvatar.svg_zdrzhi.png",
      },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/buidoanquanghuy19112002/image/upload/v1687239045/delishipexpress/2048px-OOjs_UI_icon_userAvatar.svg_zdrzhi.png",
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
