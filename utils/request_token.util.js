const jwt = require("jsonwebtoken");

exports.generate = (payload) => {
  const token = jwt.sign(payload, process.env.TOKEN_KEY, {
    expiresIn: process.env.TOKEN_EXPIRY
  });

  return token;
}