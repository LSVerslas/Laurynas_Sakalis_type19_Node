// src/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController');

// Route to handle user login
router.post('/api/auth/login', login);

module.exports = router;
