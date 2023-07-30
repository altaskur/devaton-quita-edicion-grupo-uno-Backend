const jws = require('jsonwebtoken');
require('dotenv').config();

function generateToken(email, name) {
  const payload = { email, name };
  const options = { expiresIn: '6d' };

  const token = jws.sign(payload, process.env.JWT_SECRET, options);
  return token;
}

function verifyToken(req, res, next) {
  // Check if token is provided
  const token = req.headers.authorization;
  if (!token) return res.status(401).send({ error: 'No token provided' });

  try {
    // Check if token is valid
    const decoded = jws.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // Next middleware
    return next();
  } catch (err) {
    return res.status(401).send({ error: 'Invalid token' });
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
