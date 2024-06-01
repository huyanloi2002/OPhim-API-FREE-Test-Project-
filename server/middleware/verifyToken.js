const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    // .split(" ")[1];
    if (!token) {
      return res.status(400).json({
        msg: "Token is required!",
        success: false,
      });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
      if (err) {
        return res.status(400).json({
          msg: "Authentication failed: Invalid token!",
          success: false,
        });
      }
      if (result.exp < new Date().getTime() / 1000) {
        return res.status(400).json({
          msg: "Token expired!",
          success: false,
        });
      }
      req.user = result;

      next();
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

module.exports = { verifyToken };
