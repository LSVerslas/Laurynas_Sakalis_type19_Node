// Patikrinti POST, PUT ir PATCH užklausas
const validateRequest = (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
        const requiredFields = getRequiredFields(req.path);
        // Paikrinti ar visi laukeliai yra
        const missingFields = requiredFields.filter(field => !req.body[field]);
        if (missingFields.length > 0) {
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }
        const invalidFields = validateDataTypes(req.body, requiredFields);
        if (invalidFields.length > 0) {
            return res.status(400).json({ error: `Invalid data types for fields: ${invalidFields.join(', ')}` });
        }
    }
    next();
};


const getRequiredFields = (path) => {
    switch (path) {
        case '/api/users/register':
            return ['name', 'email', 'password', 'role_id'];
        case '/api/shop_items':
            return ['name', 'price', 'description', 'image', 'item_type_id'];
        case '/api/orders':
            return ['user_id', 'shop_item_id', 'quantity', 'total_price', 'status'];
        default:
            return [];
    }
};

// Įgalinti informaciją
const validateDataTypes = (data, fields) => {
    const invalidFields = [];
    fields.forEach(field => {
        if (typeof data[field] !== getExpectedDataType(field)) {
            invalidFields.push(field);
        }
    });
    return invalidFields;
};


const getExpectedDataType = (field) => {
    switch (field) {
        case 'price':
            return 'number';
        case 'status':
            return 'boolean';
        default:
            return 'string';
    }
};

module.exports = validateRequest;
