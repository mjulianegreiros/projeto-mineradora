const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoController');

router.get('/', servicoController.listar);
router.post('/', servicoController.criar);

module.exports = router;
