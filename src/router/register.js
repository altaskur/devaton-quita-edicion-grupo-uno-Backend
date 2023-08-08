const { v4: uuidv4 } = require('uuid');

const express = require('express');

const { db } = require('../db/db');
const { encriptPassword } = require('../auth/auth');

const router = express.Router();

router.post('/', encriptPassword, async (req, res) => {
  const {
    email, password, nick, fullName,
  } = req.body;
  const userId = uuidv4();
  const query = 'INSERT INTO users (user_id, full_name, email, password, nick_name) VALUES ($1, $2, $3, $4, $5)';
  const values = [userId, fullName, email, password, nick];
  try {
    await db.none(query, values);
    return res.status(200).json({ status: 'OK' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'Error to create user' });
  }
});

module.exports = router;
