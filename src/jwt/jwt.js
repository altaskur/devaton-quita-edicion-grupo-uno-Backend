const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) => {
  const options = { expiresIn: '15m' };
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = {
  verifyToken,
  generateToken,
};
