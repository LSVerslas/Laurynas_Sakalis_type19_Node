const userRoles = [];

// Gauti visas roles
const getAllUserRoles = (req, res) => {
    // Ištraukti visas roles iš duombazės
    res.status(200).json({ userRoles });
};

module.exports = {
    getAllUserRoles,
};
