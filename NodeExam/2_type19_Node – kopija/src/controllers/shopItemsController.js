// src/controllers/shopItemsController.js
// Assume you have access to the ShopItem model for interacting with the database

// Mock shop item data (replace this with actual database interactions)
const shopItems = [];

// Controller to add a new shop item
const addShopItem = (req, res) => {
    const { name, price, description, image, item_type_id } = req.body;

    // Validate input
    if (!name || !price || !description || !image || !item_type_id) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create a new shop item object (replace this with database insertion)
    const newShopItem = {
        shop_item_id: shopItems.length + 1,
        name,
        price,
        description,
        image,
        item_type_id,
    };

    // Save the shop item object (replace this with database insertion)
    shopItems.push(newShopItem);

    res.status(201).json({ message: 'Shop item added successfully.' });
};

// Controller to get all shop items
const getAllShopItems = (req, res) => {
    // Retrieve all shop items from the database (replace this with actual query)
    res.status(200).json({ shopItems });
};

// Controller to get a shop item by ID
const getShopItemById = (req, res) => {
    const { id } = req.params;

    // Find the shop item by ID (replace this with actual query)
    const shopItem = shopItems.find(item => item.shop_item_id === parseInt(id));

    if (!shopItem) {
        return res.status(404).json({ error: 'Shop item not found.' });
    }

    res.status(200).json({ shopItem });
};

// Controller to delete a shop item by ID
const deleteShopItemById = (req, res) => {
    const { id } = req.params;

    // Find the index of the shop item by ID (replace this with actual query)
    const index = shopItems.findIndex(item => item.shop_item_id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Shop item not found.' });
    }

    // Remove the shop item from the array (replace this with actual deletion)
    shopItems.splice(index, 1);

    res.status(200).json({ message: 'Shop item deleted successfully.' });
};

module.exports = {
    addShopItem,
    getAllShopItems,
    getShopItemById,
    deleteShopItemById,
};
