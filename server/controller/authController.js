const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateEmail } = require("../utils/valueValidate");

let salt = bcrypt.genSaltSync(10);

const authController = {
  register: async (req, res) => {
    try {
      const { email, password, confirm_password } = req.body;

      if (!email) {
        return res.status(400).json({
          msg: "Please enter your email!",
          msg_vn: "Vui lòng nhập email!",
          success: false,
        });
      }

      const checkEmail = validateEmail(email);

      if (!checkEmail) {
        return res.status(400).json({
          msg: "This email is not valid!",
          msg_vn: "Email này không hợp lệ!",
          success: false,
        });
      }

      if (!password) {
        return res.status(400).json({
          msg: "Please enter your password!",
          msg_vn: "Vui lòng nhập mật khẩu!",
          success: false,
        });
      }

      if (password.length <= 6) {
        return res.status(400).json({
          msg: "Password less than 6 characters",
          msg_vn: "Mật khẩu ít hơn 6 ký tự!",
          success: false,
        });
      }

      if (confirm_password !== password) {
        return res.status(400).json({
          msg: "Confirm password is incorrect with password!",
          msg_vn: "Mật khẩu xác nhận không trùng khớp!",
          success: false,
        });
      }

      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          msg: "This email is exist!",
          msg_vn: "Email này đã được đăng ký!",
          success: false,
        });
      }

      const hashPassword = await bcrypt.hash(password, salt);

      //Cắt email để lấy phần đầu của email làm useername
      const username = email.split("@")[0];

      const newUser = new User({
        email,
        username,
        password: hashPassword,
        isActive: true,
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
        msg_vn: "Đăng ký tài khoản thành công!",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        msg: "Please enter your email!",
        msg_vn: "Vui lòng nhập email!",
        success: false,
      });
    }

    if (!password) {
      return res.status(400).json({
        msg: "Please enter your password!",
        msg_vn: "Vui lòng nhập password!",
        success: false,
      });
    }

    if (password.length <= 6) {
      return res.status(400).json({
        msg: "Password less than 6 characters!",
        msg_vn: "Mật khẩu ít hơn 6 ký tự!",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: "This email is not exist!",
        msg_vn: "Email này không tồn tại!",
        success: false,
      });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(400).json({
        msg: "Password is not correct!",
        msg_vn: "Mật khẩu không đúng!",
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
      msg_vn: "Đăng nhập thành công!",
      success: true,
    });
  },
  refreshToken: async (req, res) => {
    try {
      const refresToken = req.cookies.refreshtoken;

      if (!refresToken) {
        return res.status(400).json({
          msg: "Please login now.",
          msg_vn: "Vui lòng đăng nhập!",
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
              msg_vn: "Vui lòng đăng nhập!",
              success: false,
            });
          }

          const user = await User.findById(result.id);

          if (!user) {
            return res.status(400).json({
              msg: "This user does not exist.",
              msg_vn: "Tài khoản không tồn tại!",
              success: false,
            });
          }

          const access_token = createAccessToken({ id: result.id });

          res.json({
            access_token,
            user,
            msg_vn: "Hoàn thành!",
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
      return res.json({
        msg: "Logged out!",
        msg_vn: "Đăng xuất thành công!",
        success: true,
      });
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
