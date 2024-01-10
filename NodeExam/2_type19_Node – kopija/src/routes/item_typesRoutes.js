// src/routes/item_typesRoutes.js

const express = require('express');
const router = express.Router();
const { validateItemType } = require('../middleware/validation'); // Import your validation middleware

// Import your controller functions for item types
const {
  getItemTypes,
  getItemTypeById,
  createItemType,
  updateItemType,
  deleteItemType,
} = require('../controllers/item_typesController');

// Route to get all item types
router.get('/api/item_types', getItemTypes);

// Route to get a specific item type by ID
router.get('/api/item_types/:id', getItemTypeById);

// Route to create a new item type
router.post('/api/item_types', validateItemType, createItemType);

// Route to update an existing item type by ID
router.put('/api/item_types/:id', validateItemType, updateItemType);

// Route to delete an item type by ID
router.delete('/api/item_types/:id', deleteItemType);

module.exports = router;
