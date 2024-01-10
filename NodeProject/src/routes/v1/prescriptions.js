const express = require('express');
const router = express.Router();
const prescriptionsController = require('../controllers/prescriptionsController');

router.get('/', prescriptionsController.getAllPrescriptions);
router.post('/', prescriptionsController.createPrescription);

module.exports = router;
