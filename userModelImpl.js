const User = require('./user');

const getAllUsers = () => {
    return User.find({}).exec();
}

const getUserById = (id) => {
    return User.findById(id).exec();
}

const updateUserByID = (id, params) => {
    return User.findByIdAndUpdate(id, params, {new: true}).exec();
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserByID
}