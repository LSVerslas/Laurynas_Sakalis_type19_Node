const express = require('express');
const router = express.Router();
const userRolesController = require('../controllers/userRolesController');

// Vartotjų rolės
router.get('/', userRolesController.getAllUserRoles);

module.exports = router;
