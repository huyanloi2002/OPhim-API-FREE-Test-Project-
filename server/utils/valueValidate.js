const validateEmail = (email) => {
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return res.test(String(email).toLowerCase());
};

const validatePhone = (phone_number) => {
  var res = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;

  return res.test(phone_number);
};

module.exports = { validateEmail, validatePhone };
