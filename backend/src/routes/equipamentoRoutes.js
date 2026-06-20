const express = require('express');
const router = express.Router();
const equipamentoController = require('../controllers/equipamentoController');

router.get('/', equipamentoController.listar);
router.post('/', equipamentoController.criar);

module.exports = router;
