const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Registracija
router.post('/register', usersController.registerUser);

// Loginas
router.post('/login', usersController.loginUser);

module.exports = router;
