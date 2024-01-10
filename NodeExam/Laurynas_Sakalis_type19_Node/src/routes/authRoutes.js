const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController');

// Tvarkyti loginus
router.post('/api/auth/login', login);

module.exports = router;
