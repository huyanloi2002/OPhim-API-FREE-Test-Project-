const requestClientIP = (req) => {
  let clientIp = req.clientIp;

  const result = {
    device: req.headers["sec-ch-ua-platform"]
      ? req.headers["sec-ch-ua-platform"].slice(1, -1)
      : "Unknown",
    browser: req.headers["sec-ch-ua"]
      ? req.headers["sec-ch-ua"].split(";")[0].slice(1, -1)
      : "Unknown",
  };

  if (clientIp === "::1" || clientIp === "127.0.0.1") {
    clientIp = "localhost";
    return {
      ...result,
      clientIp,
    };
  }

  return {
    ...result,
    clientIp,
  };
};

module.exports = requestClientIP;
