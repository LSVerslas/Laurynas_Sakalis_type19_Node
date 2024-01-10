const express = require('express');
const router = express.Router();
const { validateItemType } = require('../middleware/validation');

const {
  getItemTypes,
  getItemTypeById,
  createItemType,
  updateItemType,
  deleteItemType,
} = require('../controllers/item_typesController');

// Gauti visus tipus
router.get('/api/item_types', getItemTypes);

// Gauti tipą pagal ID
router.get('/api/item_types/:id', getItemTypeById);

// Sukurti tipą
router.post('/api/item_types', validateItemType, createItemType);

// Pakoreguoti tipą pagal ID
router.put('/api/item_types/:id', validateItemType, updateItemType);

// Ištrinti pagal ID
router.delete('/api/item_types/:id', deleteItemType);

module.exports = router;
