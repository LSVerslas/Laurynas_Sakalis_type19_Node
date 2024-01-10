const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const validateRequest = require('./validationMiddleware');
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authRoutes);

// Custom middleware for request validation
app.use(validateRequest);

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
    const userRole = req.body.role_id; // Change this to get the role from your authentication mechanism

    if (userRole !== 'admin') {
        return res.status(403).json({ error: 'Unauthorized access. Only admins allowed.' });
    }

    next();
};

// Routes
const usersRoutes = require('./routes/usersRoutes');
const itemTypesRoutes = require('./routes/item_typesRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const shopItemsRoutes = require('./routes/shop_itemsRoutes');
const userRolesRoutes = require('./routes/user_rolesRoutes');

app.use('/api/users', usersRoutes);
app.use('/api/item_types', itemTypesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/shop_items', shopItemsRoutes);
app.use('/api/user_roles', userRolesRoutes);

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Middleware to check admin permissions for the "add_item.html" page
app.get('/add_item.html', isAdmin, (req, res) => {
    res.sendFile(__dirname + '/public/add_item.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
