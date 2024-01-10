// Užsakymui pridėti:
const addOrder = (req, res) => {
    const { user_id, shop_item_id, quantity, total_price, status } = req.body;

    // Įgalinti input'us
    if (!user_id || !shop_item_id || !quantity || !total_price || status === undefined) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Sukurti užsakymą
    const newOrder = {
        order_id: orders.length + 1,
        user_id,
        shop_item_id,
        quantity,
        total_price,
        status,
    };

    orders.push(newOrder);

    res.status(201).json({ message: 'Order added successfully.' });
};

// Gauti visus užsakymus
const getAllOrders = (req, res) => {
    // Ištraukti duomenis iš duombazės
    res.status(200).json({ orders });
};

// Gauti užsakymus pagal ID
const getOrderById = (req, res) => {
    const { id } = req.params;

    // Surasti užsakymus pagal ID
    const order = orders.find(ord => ord.order_id === parseInt(id));

    if (!order) {
        return res.status(404).json({ error: 'Order not found.' });
    }

    res.status(200).json({ order });
};

// Gauti užsakymus pagal vartotojo ID
const getOrdersByUserId = (req, res) => {
    const { user_id } = req.params;

    // Surasti užsakymus pagal vartotojo ID
    const userOrders = orders.filter(ord => ord.user_id === parseInt(user_id));

    res.status(200).json({ userOrders });
};

module.exports = {
    addOrder,
    getAllOrders,
    getOrderById,
    getOrdersByUserId,
};
