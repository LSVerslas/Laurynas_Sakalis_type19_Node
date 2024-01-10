// src/routes/user_rolesRoutes.js
const express = require('express');
const router = express.Router();
const userRolesController = require('../controllers/userRolesController');

// Route to get all user roles
router.get('/', userRolesController.getAllUserRoles);

module.exports = router;
