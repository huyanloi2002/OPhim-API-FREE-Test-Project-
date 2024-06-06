const Support = require("../models/supportModel");
const User = require("../models/userModel");
const { validatePhone } = require("../utils/valueValidate");
const cloudinary = require("cloudinary").v2;

const supportController = {
  createSupport: async (req, res) => {
    try {
      const user_id = req.user.id;

      const { title, phone_number, description, images } = req.body;

      let imagesLink = [];

      if (images && images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.uploader.upload(images[i].url, {
            folder: "movies_project/supports",
            width: 360,
            crop: "scale",
          });

          imagesLink.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }
      }

      const user = await User.findById({ _id: user_id });

      if (!user) {
        return res.status(500).json({
          msg: "User not found!",
          msg_vn: "Người dùng không khả dụng!",
          success: false,
        });
      }

      if (!title && !phone_number && !description) {
        return res.status(500).json({
          msg: "Please fill in all the information for support!",
          msg_vn: "Vui lòng điền đầy đủ thông tin để được hỗ trợ!",
          success: false,
        });
      }

      if (title.length < 10) {
        return res.status(500).json({
          msg: "Title less than 10 characters!",
          msg_vn: "Tiêu đề dưới 10 ký tự!",
          success: false,
        });
      }

      if (description.length < 20) {
        return res.status(500).json({
          msg: "Description less than 20 characters!",
          msg_vn: "Mô tả dưới 20 ký tự!",
          success: false,
        });
      }

      const isPhone = validatePhone(phone_number);
      if (!isPhone) {
        return res.status(500).json({
          msg: "Phone number is incorrect format!",
          msg_vn: "Số điện thoại không đúng định dạng!",
          success: false,
        });
      }

      const newSupport = new Support({
        user_id: user._id,
        email: user.email,
        title,
        phone_number,
        description,
        images: imagesLink,
      });

      await newSupport.save();

      return res.status(200).json({
        msg: "Send support vouchers successfully!",
        msg_vn: "Gửi phiếu hỗ trợ thành công!",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  getMySupport: async (req, res) => {
    try {
      const user_id = req.user.id;

      const support = await Support.find({ user_id: user_id });

      return res.status(200).json({
        support,
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  getSupportById: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  getAllSupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  updateSupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
  deleteSupport: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
        success: false,
      });
    }
  },
};

module.exports = supportController;
