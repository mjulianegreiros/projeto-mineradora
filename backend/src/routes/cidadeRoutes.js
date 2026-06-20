const express = require('express');
const router = express.Router();
const cidadeController = require('../controllers/cidadeController');

router.get('/', cidadeController.listar);
router.post('/', cidadeController.criar);

module.exports = router;
