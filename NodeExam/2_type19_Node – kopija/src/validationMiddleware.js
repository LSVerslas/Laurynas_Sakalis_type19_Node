// src/validationMiddleware.js

// Middleware to validate POST, PUT, and PATCH requests
const validateRequest = (req, res, next) => {
    // Check if the request method is POST, PUT, or PATCH
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
        // Get the required fields for the current route (modify this based on your routes)
        const requiredFields = getRequiredFields(req.path);

        // Check if all required fields are present
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }

        // Check data types of fields (modify this based on your routes)
        const invalidFields = validateDataTypes(req.body, requiredFields);

        if (invalidFields.length > 0) {
            return res.status(400).json({ error: `Invalid data types for fields: ${invalidFields.join(', ')}` });
        }
    }

    // Continue to the next middleware or route handler
    next();
};

// Function to get required fields based on the route path (modify this based on your routes)
const getRequiredFields = (path) => {
    switch (path) {
        case '/api/users/register':
            return ['name', 'email', 'password', 'role_id'];
        case '/api/shop_items':
            return ['name', 'price', 'description', 'image', 'item_type_id'];
        case '/api/orders':
            return ['user_id', 'shop_item_id', 'quantity', 'total_price', 'status'];
        // Add other routes and their required fields
        default:
            return [];
    }
};

// Function to validate data types of fields (modify this based on your routes)
const validateDataTypes = (data, fields) => {
    const invalidFields = [];

    fields.forEach(field => {
        if (typeof data[field] !== getExpectedDataType(field)) {
            invalidFields.push(field);
        }
    });

    return invalidFields;
};

// Function to get the expected data type for a field (modify this based on your routes)
const getExpectedDataType = (field) => {
    switch (field) {
        case 'price':
            return 'number';
        case 'status':
            return 'boolean';
        // Add other fields and their expected data types
        default:
            return 'string';
    }
};

module.exports = validateRequest;
