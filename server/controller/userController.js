const User = require("../models/userModel");
const Login_History = require("../models/loginHistoryModel");

const bcrypt = require("bcryptjs");

const userController = {
  getLoginHistory: async (req, res) => {
    try {
      const user_id = req.user.id;

      const login_history = await Login_History.find({ user_id });

      return res.status(200).json({
        login_history,
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },

  checkUserFromClient: async (req, res) => {
    try {
      const { email, password, type } = req.body;

      const user = await User.findOne({ email });

      if (type === "login") {
        if (!user) {
          return res.json({
            isCheckEmail: false,
          });
        } else if (user) {
          let isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.json({
              isCheckEmail: true,
              isCheckPassword: false,
            });
          } else {
            return res.json({
              isCheckEmail: true,
              isCheckPassword: true,
            });
          }
        }
      } else if (type === "register") {
        if (user) {
          return res.json({
            isCheckEmail: true,
          });
        } else if (!user) {
          return res.json({
            isCheckEmail: false,
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
};

module.exports = userController;
