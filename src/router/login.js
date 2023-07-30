const express = require('express');
const { generateToken } = require('../jwt/jwt');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ status: 'Missing email password' });

  // todo check if user exists in db
  // todo check if password is correct

  const token = generateToken(email, password);
  return res.status(200).json({ status: 'OK', token });
});

module.exports = router;
