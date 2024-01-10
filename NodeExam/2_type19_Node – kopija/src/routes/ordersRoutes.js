// src/routes/ordersRoutes.js
const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Route to add a new order
router.post('/', ordersController.addOrder);

// Route to get all orders
router.get('/', ordersController.getAllOrders);

// Route to get an order by ID
router.get('/:id', ordersController.getOrderById);

// Route to get orders by user ID
router.get('/user/:user_id', ordersController.getOrdersByUserId);

module.exports = router;
