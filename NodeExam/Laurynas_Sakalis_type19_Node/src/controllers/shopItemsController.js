const shopItems = [];

// Pridėti prekę
const addShopItem = (req, res) => {
    const { name, price, description, image, item_type_id } = req.body;

    if (!name || !price || !description || !image || !item_type_id) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Sukurti naują prekę
    const newShopItem = {
        shop_item_id: shopItems.length + 1,
        name,
        price,
        description,
        image,
        item_type_id,
    };

    // Išsaugoti prekę
    shopItems.push(newShopItem);

    res.status(201).json({ message: 'Shop item added successfully.' });
};

// Gauti visas prekes
const getAllShopItems = (req, res) => {
    // Ištraukti prekes iš duombazės
    res.status(200).json({ shopItems });
};

// Gauti prekę pagal ID
const getShopItemById = (req, res) => {
    const { id } = req.params;

    // Rasti prekę pagal ID
    const shopItem = shopItems.find(item => item.shop_item_id === parseInt(id));

    if (!shopItem) {
        return res.status(404).json({ error: 'Shop item not found.' });
    }

    res.status(200).json({ shopItem });
};

// Ištrinti prekę pagal ID
const deleteShopItemById = (req, res) => {
    const { id } = req.params;

    const index = shopItems.findIndex(item => item.shop_item_id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Shop item not found.' });
    }

    // Ištrinti prekę iš array
    shopItems.splice(index, 1);

    res.status(200).json({ message: 'Shop item deleted successfully.' });
};

module.exports = {
    addShopItem,
    getAllShopItems,
    getShopItemById,
    deleteShopItemById,
};
