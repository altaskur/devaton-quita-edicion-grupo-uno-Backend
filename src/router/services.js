const express = require('express');
const { verifyToken } = require('../jwt/jwt');
const {
  listServices,
  createService,
  updateService,
  deleteService,
} = require('../controllers/services');
const {
  listServicesType,
  createServicesType,
  updateServicesType,
  deleteServicesType,
} = require('../controllers/servicesType');

const router = express.Router();

router.get('/', verifyToken, listServices);
router.post('/', verifyToken, createService);
router.put('/:id', verifyToken, updateService);
router.delete('/:id', verifyToken, deleteService);

router.get('/type/', verifyToken, listServicesType);
router.post('/type', verifyToken, createServicesType);
router.put('/type/:id', verifyToken, updateServicesType);
router.delete('/type/:id', verifyToken, deleteServicesType);

module.exports = router;
