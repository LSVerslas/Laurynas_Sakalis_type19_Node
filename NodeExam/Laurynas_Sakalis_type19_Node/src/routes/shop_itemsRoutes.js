const express = require('express');
const router = express.Router();
const shopItemsController = require('../controllers/shopItemsController');

// Pridėti prekę
router.post('/', shopItemsController.addShopItem);

// Gauti visas prekes
router.get('/', shopItemsController.getAllShopItems);

// Gauti prekę pagal ID
router.get('/:id', shopItemsController.getShopItemById);

// Ištrinti prekę pagal ID
router.delete('/:id', shopItemsController.deleteShopItemById);

module.exports = router;
