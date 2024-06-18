const mongoose = require("mongoose");

const watchListSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: 30,
    },
    is_attach: {
      type: Boolean,
      default: false,
    },
    movies: [{ movie_id: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Watch_List", watchListSchema);
