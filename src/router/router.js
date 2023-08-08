const Router = require('express');
const { Register } = require('../controllers/controllers');

const router = Router();

router.post('/api/register', (req, res) => Register(req, res));

module.exports = router;
