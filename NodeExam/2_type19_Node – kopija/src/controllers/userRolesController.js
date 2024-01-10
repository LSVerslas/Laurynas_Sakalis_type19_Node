// src/controllers/userRolesController.js
// Assume you have access to the UserRole model for interacting with the database

// Mock user roles data (replace this with actual database interactions)
const userRoles = [];

// Controller to get all user roles
const getAllUserRoles = (req, res) => {
    // Retrieve all user roles from the database (replace this with actual query)
    res.status(200).json({ userRoles });
};

module.exports = {
    getAllUserRoles,
};
