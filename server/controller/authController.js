const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let salt = bcrypt.genSaltSync(10);

const authController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username) {
        return res.status(400).json({
          msg: "Please enter your username!",
          success: false,
        });
      }

      if (!password) {
        return res.status(400).json({
          msg: "Please enter your password!",
          success: false,
        });
      }

      if (password.length <= 6) {
        return res.status(400).json({
          msg: "Password less than 6 characters",
          success: false,
        });
      }

      const user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({
          msg: "This username is exist!",
          success: false,
        });
      }

      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        password: hashPassword,
      });

      const access_token = createAccessToken({ id: newUser.id });

      await newUser.save();

      res.json({
        user: {
          ...newUser._doc,
          password: "",
        },
        access_token,
        msg: "Register user successfully!",
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    if (!username) {
      return res.status(400).json({
        msg: "Please enter your username!",
        success: false,
      });
    }

    if (!password) {
      return res.status(400).json({
        msg: "Please enter your password!",
        success: false,
      });
    }

    if (password.length <= 6) {
      return res.status(400).json({
        msg: "Password less than 6 characters!",
        success: false,
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        msg: "Username is not exist!",
        success: false,
      });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(400).json({
        msg: "Password is not correct!",
        success: false,
      });
    }

    const access_token = createAccessToken({ id: user.id });
    const refresh_token = createRefreshToken({ id: user.id });

    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/api/v1/movie-test-project/refresh_token",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      user,
      access_token,
      msg: "Login successfully!",
      success: true,
    });
  },
  refreshToken: async (req, res) => {
    try {
      const refresToken = req.cookies.refreshtoken;

      if (!refresToken) {
        return res.status(400).json({
          msg: "Please login now.",
          success: false,
        });
      }

      jwt.verify(
        refresToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, result) => {
          if (err) {
            return res.status(400).json({
              msg: "Please login now.",
              success: false,
            });
          }

          const user = await User.findById(result.id);

          if (!user) {
            return res.status(400).json({
              msg: "This user does not exist.",
              success: false,
            });
          }

          const access_token = createAccessToken({ id: result.id });

          res.json({
            access_token,
            user,
          });
        }
      );
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", {
        path: "/api/v1/movie-test-project/refresh_token",
      });
      return res.json({ msg: "Logged out!", success: true });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = authController;
