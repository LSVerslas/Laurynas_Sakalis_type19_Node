const express = require('express');
const router = express.Router();
const medicationsController = require('../controllers/medicationsController');

router.get('/', medicationsController.getAllMedications);
router.post('/', medicationsController.createMedication);

module.exports = router;
