// src/routes/shop_itemsRoutes.js
const express = require('express');
const router = express.Router();
const shopItemsController = require('../controllers/shopItemsController');

// Route to add a new shop item
router.post('/', shopItemsController.addShopItem);

// Route to get all shop items
router.get('/', shopItemsController.getAllShopItems);

// Route to get a shop item by ID
router.get('/:id', shopItemsController.getShopItemById);

// Route to delete a shop item by ID
router.delete('/:id', shopItemsController.deleteShopItemById);

module.exports = router;
