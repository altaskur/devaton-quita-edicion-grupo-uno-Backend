const Router = require('express');
const { Register } = require('../controllers/controllers');

const router = Router();

router.get('/prueba', (req, res) => res.send('Prueba de coneccion'));

router.post('/api/register', (req, res) => Register(req, res));

module.exports = router;
