const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Pridėti užsakymą
router.post('/', ordersController.addOrder);

// Gauti užsakymus
router.get('/', ordersController.getAllOrders);

// Gauti užsakymus pagal ID
router.get('/:id', ordersController.getOrderById);

// Gauti užsakymus pagal vartotojo ID
router.get('/user/:user_id', ordersController.getOrdersByUserId);

module.exports = router;
