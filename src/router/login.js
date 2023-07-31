const express = require('express');
const { generateToken } = require('../jwt/jwt');

const users = require('../db/users');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ status: 'Missing email password' });

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ status: 'Unauthorized' });

  const token = generateToken(email, password);
  return res.status(200).json({ status: 'OK', token });
});

module.exports = router;
