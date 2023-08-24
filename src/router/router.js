const Router = require('express');
const { Register, OrderServices } = require('../controllers/controllers');

const router = Router();

router.post('/api/register', (req, res) => Register(req, res));
router.get('/api/prueba', (req, res) => OrderServices(req, res));

module.exports = router;
