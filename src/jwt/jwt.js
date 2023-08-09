const jwt = require('jsonwebtoken');

const tokenJwt = (payload, JWT_SECRET, options) => jwt.sign(payload, JWT_SECRET, options);

module.exports = {
  tokenJwt,
};
