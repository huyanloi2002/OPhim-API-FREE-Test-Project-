import { postDataAPI } from "./fetchApi";

export const formRegisterValidate = async (data) => {
  const { email, password, confirm_password } = data;

  const res = await postDataAPI("/check_user", {
    email,
    type: "register",
  });

  if (!email) {
    return {
      message: "Vui lòng nhập email của bạn!",
      type: "email",
      success: false,
    };
  }
  if (!validateEmail(email)) {
    return {
      message: "Email này không hợp lệ!",
      type: "email",
      success: false,
    };
  }
  if (res.data.isCheckEmail) {
    return {
      message: "Email này đã tồn tại!",
      type: "email",
      success: false,
    };
  }
  if (!password) {
    return {
      message: "Vui lòng nhập mật khẩu của bạn!",
      type: "password",
      success: false,
    };
  }
  if (password.length <= 6) {
    return {
      message: "Mật khẩu nhỏ hơn 6 kí tự!",
      type: "password",
      success: false,
    };
  }
  if (password !== confirm_password) {
    return {
      message: "Mật khẩu xác nhận không đúng!",
      type: "confirm_password",
      success: false,
    };
  }

  return {
    message: "Hoàn thành!",
    success: true,
  };
};

export const formLoginValidate = async (data) => {
  const { email, password } = data;

  const res = await postDataAPI("/check_user", {
    email,
    password,
    type: "login",
  });

  if (!email) {
    return {
      message: "Vui lòng nhập email của bạn!",
      type: "email",
      success: false,
    };
  }
  if (!validateEmail(email)) {
    return {
      message: "Email này không hợp lệ!",
      type: "email",
      success: false,
    };
  }
  if (!res.data.isCheckEmail) {
    return {
      message: "Email này không tồn tại!",
      type: "email",
      success: false,
    };
  }

  if (!password) {
    return {
      message: "Vui lòng nhập mật khẩu của bạn!",
      type: "password",
      success: false,
    };
  }
  if (password.length <= 6) {
    return {
      message: "Mật khẩu nhỏ hơn 6 kí tự!",
      type: "password",
      success: false,
    };
  }
  if (!res.data.isCheckPassword) {
    return {
      message: "Mật khẩu không đúng!",
      type: "password",
      success: false,
    };
  }

  return {
    message: "Hoàn thành!",
    success: true,
  };
};

export const validateEmail = (email) => {
  /* eslint-disable no-useless-escape */
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return res.test(String(email).toLowerCase());
};
