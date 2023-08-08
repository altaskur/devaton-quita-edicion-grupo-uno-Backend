const express = require('express');
const { generateToken } = require('../jwt/jwt');
const { db } = require('../db/db');
const { comparePassword } = require('../auth/auth');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ status: 'Missing email' });

  const passwordDb = await db.oneOrNone('SELECT password FROM users WHERE email = $1 ', email);

  if (!passwordDb) return res.status(400).json({ status: 'Missing User' });
  const result = await comparePassword(password, passwordDb.password);

  if (!result) return res.status(401).json({ status: 'Unauthorized' });

  const token = generateToken(email, password);
  return res.status(200).json({ status: 'OK', token });
});

module.exports = router;
