const nodemailer = require("nodemailer");
const UserOTPVerifyEmail = require("../models/userOTPVerifyEmailModel");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendOTPMail = async ({ _id, username, email }, res) => {
  try {
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`;

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Xác thực email với Movie Free (MBTV)",
      html: `
        <h2 class="title_verify-gmail fw-bold mb-4" style="color: #ffbd59">
        Xác thực email của bạn
      </h2>
      <div style="font-weight: 500; font-size: small">
        <p>Welcome, <b style="color: #ffbd59">${username}</b> !</p>
        <p>Tài khoản của bạn đã được tạo trên nền tảng của chúng tôi</p>
        <p>
          Thông tin để bạn xác thực email đã được gửi đến bạn với dòng OTP 6 số
        </p>
        <h5 class="mb-4">
          <b
            >Địa chỉ email của bạn:
            <span style="color: #ffbd59">${email}</span></b
          >
        </h5>
        <p>
          Nhập dòng OTP 6 số trên vào ứng dụng của chúng tôi ở phần quản lý thông tin cá nhân:
        </p>
        <div
          style="
            width: 200px;
            height: 50px;
            background-color: #ffbd59;
            text-align: center;
            border-radius:5px
          "
        >
          <span style="letter-spacing: 0.5rem; font-size: xx-large">
            <b>${otp}</b>
          </span>
        </div>
        <p class="mt-2"><b>Note: </b>Mã OTP sẽ hết hạn sau 5 phút nữa!.</p>
        <p style="font-style:italic">
        <b>By Bui Doan Quang Huy (AMDIN)</b> từ Movies Free (MBTV)
      </div>`,
    };

    const userOTPVerifyEmailData = new UserOTPVerifyEmail({
      user_id: _id,
      otp: otp,
      expiredAt: new Date().getTime() + 5 * 60 * 1000,
    });

    await userOTPVerifyEmailData.save();
    transporter.sendMail(mailOptions);
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
      success: false,
    });
  }
};

module.exports = sendOTPMail;
