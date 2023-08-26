const express = require('express');
const { test, testToken } = require('../controllers/test');
const { verifyToken } = require('../jwt/jwt');

const router = express.Router();

router.get('/', test);
router.get('/token', verifyToken, testToken);

module.exports = router;
