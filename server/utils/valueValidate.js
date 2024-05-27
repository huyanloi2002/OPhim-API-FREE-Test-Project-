const validateEmail = (email) => {
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return res.test(String(email).toLowerCase());
};

module.exports = { validateEmail };
