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
        default: "0921fc87aa989330b8d403014bf4f340_erz0au",
      },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/buidoanquanghuy19112002/image/upload/v1717299531/movies_project/avatar/0921fc87aa989330b8d403014bf4f340_erz0au.jpg",
      },
      isChange: {
        type: Boolean,
        default: false,
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
    identify: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
